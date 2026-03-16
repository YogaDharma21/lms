import mongoose from "mongoose";
import categoryModel from "./categoryModel.js";
import userModel from "./userModel.js";
import courseDetailModel from "./courseDetailModel.js";

const courseModel = mongoose.Schema({
    name: { type: String, required: true },
    thumbnail: { type: String, required: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        index: true,
    },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            index: true,
        },
    ],
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        index: true,
    },
    details: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CourseDetail",
        },
    ],
});

courseModel.index({ category: 1, manager: 1 });

courseModel.post("findOneAndDelete", async (doc) => {
    if (doc) {
        await categoryModel.findByIdAndUpdate(doc.category, {
            $pull: {
                courses: doc._id,
            },
        });

        await courseDetailModel.deleteMany({
            course: doc._id,
        });

        doc.students?.map(async (std) => {
            await userModel.findByIdAndUpdate(std._id, {
                $pull: {
                    courses: doc._id,
                },
            });
        });
    }
});

export default mongoose.model("Course", courseModel);
