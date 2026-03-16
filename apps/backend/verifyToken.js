import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const verifyToken = async (req, res, next) => {
    const secretKey = process.env.SECRET_KEY_JWT;

    if (!secretKey) {
        return res.status(500).json({
            message: "JWT secret key is not configured. Please set SECRET_KEY_JWT environment variable.",
        });
    }

    const authHeader = req?.headers?.authorization;
    if (!authHeader) {
        return res.status(400).json({
            message: "Authorization header is missing",
        });
    }

    const tokenParts = authHeader.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "JWT") {
        return res.status(400).json({
            message: "Invalid authorization header format. Expected: 'JWT <token>'",
        });
    }

    const token = tokenParts[1];

    if (!token) {
        return res.status(400).json({
            message: "Token is missing",
        });
    }

    try {
        const decoded = jwt.verify(token, secretKey);

        const user = await userModel.findById(
            decoded.data.id,
            "_id name email role",
        );

        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        req.user = {
            _id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
        };

        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                message: "Token expired",
            });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                message: "Invalid token",
            });
        }

        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
