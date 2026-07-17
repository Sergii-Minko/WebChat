import express from "express";
import { getUsersForSidebar } from "../controllers/message.controller.js";
import { protectRouter } from "../middleware/auth.middleware.js";
import { getConversationsForSidebar } from "../controllers/message.controller.js";
import { getMessagesForConversation } from "../controllers/message.controller.js";
import { sendMessage } from "../controllers/message.controller.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.get("/users", protectRouter, getUsersForSidebar); 
router.get("/conversations", protectRouter, getConversationsForSidebar); 
router.get("/:id", protectRouter, getMessagesForConversation);
router.post("/send/:id", upload.single("media"), sendMessage);


export default router;

