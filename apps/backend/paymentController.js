import crypto from "crypto";
import transactionModel from "../models/transactionModel.js";

// Helper function to validate MongoDB ObjectId
const objectIdRegex = /^[a-fA-F0-9]{24}$/;
const isValidObjectId = (val) => objectIdRegex.test(val);

// Helper function to verify Midtrans signature
const verifyMidtransSignature = (body, serverKey) => {
    const {
        order_id,
        status_code,
        gross_amount,
    } = body;

    const signature = crypto
        .createHash("sha512")
        .update(order_id + status_code + gross_amount + serverKey)
        .digest("hex");

    return signature === body.signature_key;
};

export const handlePayment = async (req, res) => {
    try {
        const body = req.body;
        const serverKey = process.env.MIDTRANS_AUTH_STRING;

        // Verify Midtrans signature to prevent fake payment notifications
        if (!serverKey) {
            console.error("Midtrans server key is not configured");
            return res.status(500).json({
                message: "Payment verification failed: Server configuration error",
            });
        }

        const isValidSignature = verifyMidtransSignature(body, serverKey);
        if (!isValidSignature) {
            return res.status(400).json({
                message: "Invalid payment signature",
            });
        }

        const orderId = body.order_id;

        // Validate that orderId is a valid MongoDB ObjectId
        if (!isValidObjectId(orderId)) {
            return res.status(400).json({
                message: "Invalid order ID format",
            });
        }

        // Check if transaction exists
        const transaction = await transactionModel.findById(orderId);
        if (!transaction) {
            return res.status(404).json({
                message: "Transaction not found",
            });
        }

        // Idempotency check - prevent double processing
        if (transaction.status === "success" && (body.transaction_status === "capture" || body.transaction_status === "settlement")) {
            return res.json({
                message: "Transaction already processed",
                data: {},
            });
        }

        if (transaction.status === "failed" && ["deny", "cancel", "expire", "failure"].includes(body.transaction_status)) {
            return res.json({
                message: "Transaction already processed",
                data: {},
            });
        }

        switch (body.transaction_status) {
            case "capture":
            case "settlement":
                await transactionModel.findByIdAndUpdate(orderId, {
                    status: "success",
                });

                break;
            case "deny":
            case "cancel":
            case "expire":
            case "failure":
                await transactionModel.findByIdAndUpdate(orderId, {
                    status: "failed",
                });
                break;
            default:
                break;
        }

        return res.json({
            message: "Handle Payment Success",
            data: {},
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
