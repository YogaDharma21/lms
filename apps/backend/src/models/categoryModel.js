import mongoose from "mongoose";

const categoryModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        courses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ]
    },
    {
        timestamps: true,
    },
);

categoryModel.index({ courses: 1 });

export default mongoose.model("Category", categoryModel);
