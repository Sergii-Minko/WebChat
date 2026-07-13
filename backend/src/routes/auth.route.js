import express from "express";
import { checkAuth } from "../controllers/auth.controller.js";
import { protectRouter } from "../middleware/auth.middleware.js";

const router =  express.Router();

router.get("/check", protectRouter, checkAuth); 

export default router;
