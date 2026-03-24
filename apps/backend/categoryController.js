import categoryModel from "../models/categoryModel.js";
import { mutateCategorySchema } from "../utils/schema.js";

export const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find().select("name _id");

        return res.json({
            message: "Get categories success",
            data: categories,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await categoryModel.findById(id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found",
            });
        }

        return res.json({
            message: "Get category success",
            data: category,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const createCategory = async (req, res) => {
    try {
        const body = req.body;

        const parse = mutateCategorySchema.safeParse(body);

        if (!parse.success) {
            const errorMessages = parse.error.issues.map((err) => err.message);

            return res.status(400).json({
                message: "Error Validation",
                data: null,
                errors: errorMessages,
            });
        }

        const existingCategory = await categoryModel.findOne({
            name: parse.data.name,
        });

        if (existingCategory) {
            return res.status(400).json({
                message: "Category already exists",
            });
        }

        const category = new categoryModel({
            name: parse.data.name,
        });

        await category.save();

        return res.json({
            message: "Create category success",
            data: category,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const parse = mutateCategorySchema.safeParse(body);

        if (!parse.success) {
            const errorMessages = parse.error.issues.map((err) => err.message);

            return res.status(400).json({
                message: "Error Validation",
                data: null,
                errors: errorMessages,
            });
        }

        const category = await categoryModel.findById(id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found",
            });
        }

        const existingCategory = await categoryModel.findOne({
            name: parse.data.name,
            _id: { $ne: id },
        });

        if (existingCategory) {
            return res.status(400).json({
                message: "Category name already exists",
            });
        }

        await categoryModel.findByIdAndUpdate(
            id,
            { name: parse.data.name },
            { new: true },
        );

        return res.json({
            message: "Update category success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await categoryModel.findById(id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found",
            });
        }

        if (category.courses && category.courses.length > 0) {
            return res.status(400).json({
                message: "Cannot delete category with courses",
            });
        }

        await categoryModel.findByIdAndDelete(id);

        return res.json({
            message: "Delete category success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
