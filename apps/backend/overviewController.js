import courseModel from "../models/courseModel.js";
import userModel from "../models/userModel.js";

export const getOverviews = async (req, res) => {
    try {
        // Validate that user is authenticated
        if (!req.user?._id) {
            return res.status(401).json({
                message: "Unauthorized: User ID not found",
            });
        }

        // Validate APP_URL is configured
        const imageUrl = process.env.APP_URL;
        if (!imageUrl) {
            return res.status(500).json({
                message: "APP_URL is not configured. Please set APP_URL environment variable.",
            });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalCourses = await courseModel
            .find({
                manager: req.user._id,
            })
            .countDocuments();

        const courses = await courseModel.find({
            manager: req.user._id,
        });

        const totalStudents = courses.reduce(
            (acc, curr) => acc + curr.students.length,
            0,
        );

        const coursesVideos = await courseModel
            .find({
                manager: req.user._id,
            })
            .populate({
                path: "details",
                select: "name type",
                match: {
                    type: "video",
                },
            });

        const totalVideos = coursesVideos.reduce(
            (acc, curr) => acc + curr.details.length,
            0,
        );

        const coursesTexts = await courseModel
            .find({
                manager: req.user._id,
            })
            .populate({
                path: "details",
                select: "name type",
                match: {
                    type: "text",
                },
            });

        const totalTexts = coursesTexts.reduce(
            (acc, curr) => acc + curr.details.length,
            0,
        );

        const coursesList = await courseModel
            .find({
                manager: req.user._id,
            })
            .select("name thumbnail")
            .populate({
                path: "category",
                select: "name -_id",
            })
            .populate({
                path: "students",
                select: "name",
            })
            .skip(skip)
            .limit(limit);

        const responseCourses = coursesList.map((item) => {
            return {
                ...item.toObject(),
                thumbnail_url: imageUrl + "/uploads/courses/" + item.thumbnail,
                total_students: item.students.length,
            };
        });

        const totalStudentsCount = await userModel
            .countDocuments({
                role: "student",
                manager: req.user._id,
            });

        const students = await userModel
            .find({
                role: "student",
                manager: req.user._id,
            })
            .select("name courses photo")
            .skip(skip)
            .limit(limit);

        const responseStudents = students.map((item) => {
            return {
                ...item.toObject(),
                photo_url: imageUrl + "/uploads/students/" + item.photo,
            };
        });

        return res.json({
            message: "Get overview success",
            data: {
                totalCourses,
                totalStudents,
                totalVideos,
                totalTexts,
                pagination: {
                    currentPage: page,
                    limit,
                    totalCourses,
                    totalStudents: totalStudentsCount,
                    totalPages: Math.ceil(totalCourses / limit),
                    totalStudentPages: Math.ceil(totalStudentsCount / limit),
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
