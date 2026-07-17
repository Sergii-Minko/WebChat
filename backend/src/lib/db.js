import mongoose from "mongoose";

export async function connectDB() {
    try {
        const mongoURL = process.env.MONGO_URL 
        if (!mongoURL) {
            throw new Error("Mongo_URL is required")
        }
        const conn = await mongoose.connect(mongoURL);
        console.log("MongoDB connected", conn.connection.host);
    } catch (error){
        console.log("MongoDB connection error:", error.message);
        process.exit(1) // 1 means failed, 0 means success
    }
}