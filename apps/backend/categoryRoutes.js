import express from "express";
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
} from "../controllers/categoryController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const categoryRoutes = express.Router();

categoryRoutes.get("/categories", verifyToken, getAllCategories);
categoryRoutes.get("/categories/:id", verifyToken, getCategoryById);
categoryRoutes.post("/categories", verifyToken, createCategory);
categoryRoutes.put("/categories/:id", verifyToken, updateCategory);
categoryRoutes.delete("/categories/:id", verifyToken, deleteCategory);

export default categoryRoutes;
