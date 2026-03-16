import courseModel from "../models/courseModel.js";
import userModel from "../models/userModel.js";

export const getOverviews = async (req, res) => {
    try {
        if (!req.user?._id) {
            return res.status(401).json({
                message: "Unauthorized: User ID not found",
            });
        }

        const imageUrl = process.env.APP_URL;
        if (!imageUrl) {
            return res.status(500).json({
                message: "APP_URL is not configured. Please set APP_URL environment variable.",
            });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const aggregationPipeline = [
            {
                $match: { manager: req.user._id }
            },
            {
                $facet: {
                    totalCourses: [{ $count: "count" }],
                    totalStudents: [
                        { $unwind: { path: "$students", preserveNullAndEmptyArrays: true } },
                        { $group: { _id: null, count: { $sum: 1 } } }
                    ],
                    totalVideos: [
                        { $unwind: { path: "$details", preserveNullAndEmptyArrays: true } },
                        {
                            $lookup: {
                                from: "coursedetails",
                                localField: "details",
                                foreignField: "_id",
                                as: "detailDocs"
                            }
                        },
                        { $unwind: { path: "$detailDocs", preserveNullAndEmptyArrays: true } },
                        { $match: { "detailDocs.type": "video" } },
                        { $group: { _id: null, count: { $sum: 1 } } }
                    ],
                    totalTexts: [
                        { $unwind: { path: "$details", preserveNullAndEmptyArrays: true } },
                        {
                            $lookup: {
                                from: "coursedetails",
                                localField: "details",
                                foreignField: "_id",
                                as: "detailDocs"
                            }
                        },
                        { $unwind: { path: "$detailDocs", preserveNullAndEmptyArrays: true } },
                        { $match: { "detailDocs.type": "text" } },
                        { $group: { _id: null, count: { $sum: 1 } } }
                    ],
                    coursesList: [
                        { $skip: skip },
                        { $limit: limit }
                    ]
                }
            }
        ];

        const aggregationResults = await courseModel.aggregate(aggregationPipeline);
        const result = aggregationResults[0];

        const totalCourses = result.totalCourses[0]?.count || 0;
        const totalStudentsCount = result.totalStudents[0]?.count || 0;
        const totalVideos = result.totalVideos[0]?.count || 0;
        const totalTexts = result.totalTexts[0]?.count || 0;
        const coursesList = result.coursesList || [];

        const courseIds = coursesList.map(c => c._id);

        const [coursesWithCategory, coursesWithStudents] = await Promise.all([
            courseModel.find({ _id: { $in: courseIds } })
                .select("name thumbnail")
                .populate({ path: "category", select: "name -_id" })
                .lean(),
            courseModel.find({ _id: { $in: courseIds } })
                .select("students")
                .lean()
        ]);

        const studentCountsMap = {};
        coursesWithStudents.forEach(c => {
            studentCountsMap[c._id.toString()] = c.students?.length || 0;
        });

        const responseCourses = coursesWithCategory.map((item) => ({
            ...item,
            thumbnail_url: imageUrl + "/uploads/courses/" + item.thumbnail,
            total_students: studentCountsMap[item._id.toString()] || 0,
        }));

        const [students, totalStudentsCountQuery] = await Promise.all([
            userModel
                .find({
                    role: "student",
                    manager: req.user._id,
                })
                .select("name courses photo")
                .skip(skip)
                .limit(limit)
                .lean(),
            userModel.countDocuments({
                role: "student",
                manager: req.user._id,
            })
        ]);

        const responseStudents = students.map((item) => ({
            ...item,
            photo_url: imageUrl + "/uploads/students/" + item.photo,
        }));

        return res.json({
            message: "Get overview success",
            data: {
                totalCourses,
                totalStudents: totalStudentsCount,
                totalVideos,
                totalTexts,
                pagination: {
                    currentPage: page,
                    limit,
                    totalCourses,
                    totalStudents: totalStudentsCountQuery,
                    totalPages: Math.ceil(totalCourses / limit),
                    totalStudentPages: Math.ceil(totalStudentsCountQuery / limit),
                },
                courses: responseCourses,
                students: responseStudents,
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
