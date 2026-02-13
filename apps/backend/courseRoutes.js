import express from "express";
import multer from "multer";
import {
    deleteCourse,
    getCourses,
    postCourse,
    updateCourse,
    getCategories,
} from "../controllers/courseController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { fileFilter, fileStorageCourse } from "../utils/multer.js";

const courseRoutes = express.Router();

const upload = multer({
    storage: fileStorageCourse,
    fileFilter: fileFilter,
});

courseRoutes.get("/courses", verifyToken, getCourses);
courseRoutes.get("/categories", verifyToken, getCategories);

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

export default courseRoutes;
