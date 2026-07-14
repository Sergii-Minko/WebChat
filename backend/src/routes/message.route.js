import express from "express";
import { getUsersForSlidebar } from "../controllers/message.controller.js";
import { protectRouter } from "../middleware/auth.middleware.js";
import { getConversationsForSlidebar } from "../controllers/message.controller.js";
import { getMessagesForConversation } from "../controllers/message.controller.js";
import { sendMessages } from "../controllers/message.controller.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.get("/users", protectRouter, getUsersForSlidebar); 
router.get("/conversations", protectRouter, getConversationsForSlidebar); 
router.get("/:Id", protectRouter, getMessagesForConversation);
router.post("/send/:id", upload.single("media"), sendMessages);


export default router;

