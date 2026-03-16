import mongoose from "mongoose";
import courseModel from "./courseModel.js";

const courseDetailModel = mongoose.Schema(
    {
        title: { type: String, required: true },
        type: {
            type: String,
            enum: ["video", "text"],
            default: "video",
        },
        youtubeId: String,
        text: String,
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    },
    { timestamps: true },
);

courseDetailModel.post("findOneAndDelete", async (doc) => {
    if (doc) {
        await courseModel.findByIdAndUpdate(doc.course, {
            $pull: {
                details: doc._id,
            },
        });
    }
});

export default mongoose.model("CourseDetail", courseDetailModel);
