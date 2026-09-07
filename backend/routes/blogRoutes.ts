import { Router } from "express";
import { getAllBlogs } from "../controllers/blogController.js"; 

const router = Router();

router.get('/blogs', getAllBlogs);

export default router;