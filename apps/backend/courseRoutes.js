import express from "express";
import multer from "multer";
import {
    deleteCourse,
    getCourses,
    postCourse,
    updateCourse,
    getCategories,
    getCourseById,
    postContentCourse,
    updateContentCourse,
} from "../controllers/courseController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { fileFilter, fileStorageCourse } from "../utils/multer.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { mutateContentSchema } from "../utils/schema.js";

const courseRoutes = express.Router();

const upload = multer({
    storage: fileStorageCourse,
    fileFilter: fileFilter,
});

courseRoutes.get("/courses", verifyToken, getCourses);
courseRoutes.get("/categories", verifyToken, getCategories);
courseRoutes.get("/courses/:id", verifyToken, getCourseById);

courseRoutes.post(
    "/courses",
    verifyToken,
    upload.single("thumbnail"),
    postCourse,
);

courseRoutes.put(
    "/courses/:id",
    verifyToken,
    upload.single("thumbnail"),
    updateCourse,
);

courseRoutes.delete("/courses/:id", verifyToken, deleteCourse);

courseRoutes.post(
    "/courses/contents",
    verifyToken,
    validateRequest(mutateContentSchema),
    postContentCourse,
);

courseRoutes.put(
    "/courses/contents/:id",
    verifyToken,
    validateRequest(mutateContentSchema),
    updateContentCourse,
);

export default courseRoutes;
