import express from "express";
import {  getAllPosts } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/getAllposts", getAllPosts);

export default router;
