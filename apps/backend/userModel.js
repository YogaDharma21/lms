import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["manager", "student"],
        default: "manager",
        index: true,
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            index: true,
        },
    ],
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        index: true,
    },
});

userModel.index({ role: 1, manager: 1 });

export default mongoose.model("User", userModel);
