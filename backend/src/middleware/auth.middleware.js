import { getAuth } from "@clerk/express";
import User from "../models/user.model.js";

export async function protectRouter (req, res, next) {
    try {
        const { userId } = getAuth(req);

        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const user = await User.findOne({ clerkId: userId });
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protectRouter middleware:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    } 
};
