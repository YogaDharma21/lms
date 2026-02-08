import express from "express";
import multer from "multer";
import {
    getCourses,
    postCourse,
    updateCourse,
} from "../controllers/courseController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { fileFilter, fileStorageCourse } from "../utils/multer.js";

const courseRoutes = express.Router();

const upload = multer({
    storage: fileStorageCourse,
    fileFilter: fileFilter,
});

courseRoutes.get("/courses", verifyToken, getCourses);
courseRoutes.post(
    "/courses",
    verifyToken,
    upload.single("thumbnail"),
    postCourse,
);
courseRoutes.put("/courses/:id", verifyToken, upload.single("thumbnail"), updateCourse);

export default courseRoutes;
