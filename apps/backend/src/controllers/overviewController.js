import courseModel from "../models/courseModel.js";
import userModel from "../models/userModel.js";
import courseDetailModel from "../models/courseDetailModel.js";

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

        const courses = await courseModel
            .find({ manager: req.user._id })
            .select("name thumbnail category students details")
            .populate({ path: "category", select: "name" })
            .skip(skip)
            .limit(limit)
            .lean();

        const totalCourses = await courseModel.countDocuments({ manager: req.user._id });

        let totalStudentsCount = 0;
        let totalVideos = 0;
        let totalTexts = 0;

        for (const course of courses) {
            totalStudentsCount += course.students?.length || 0;
            
            if (course.details && course.details.length > 0) {
                const details = await courseDetailModel.find({
                    _id: { $in: course.details }
                }).lean();
                
                details.forEach(detail => {
                    if (detail.type === "video") totalVideos++;
                    if (detail.type === "text") totalTexts++;
                });
            }
        }

        const responseCourses = courses.map((item) => ({
            ...item,
            thumbnail_url: imageUrl + "/uploads/courses/" + item.thumbnail,
            total_students: item.students?.length || 0,
        }));

        const students = await userModel
            .find({
                role: "student",
                manager: req.user._id,
            })
            .select("name courses photo")
            .skip(skip)
            .limit(limit)
            .lean();

        const totalStudentsQuery = await userModel.countDocuments({
            role: "student",
            manager: req.user._id,
        });

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
                    totalStudents: totalStudentsQuery,
                    totalPages: Math.ceil(totalCourses / limit),
                    totalStudentPages: Math.ceil(totalStudentsQuery / limit),
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
