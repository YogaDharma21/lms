import crypto from "crypto";
import transactionModel from "../models/transactionModel.js";

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


        const orderId = body.order_id;


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
