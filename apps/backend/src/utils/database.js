import mongoose from "mongoose";

export default function connectDB() {
    const DATABASE_URL = process.env.DATABASE_URL;

    if (!DATABASE_URL) {
        console.error("DATABASE_URL is not configured. Please set DATABASE_URL environment variable.");
        process.exit(1);
    }

    try {
        mongoose.connect(DATABASE_URL);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

    const dbConn = mongoose.connection;

    dbConn.once("open", (_) => {
        console.log(`Database Connected: ${DATABASE_URL}`);
    });

    dbConn.on("error", (err) => {
        console.error(`Connection Error: ${err}`);
    });
}
