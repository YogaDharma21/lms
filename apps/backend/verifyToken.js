import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const verifyToken = async (req, res, next) => {
    const secretKey = process.env.SECRET_KEY_JWT ?? "";

    if (req?.headers?.authorization?.split(" ")[0] === "JWT") {
        const decoded = jwt.verify(
            req?.headers?.authorization?.split(" ")[1],
            secretKey,
        );

        const user = await userModel.findById(
            decoded.data.id,
            "_id name email role",
        );

        if (!user) {
            return res.status(400).json({
                message: "Token expired",
            });
        }

        req.user = {
            _id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
        };

        next();
    } else {
        return res.status(400).json({
            message: "Unauthorization",
        });
    }
};
