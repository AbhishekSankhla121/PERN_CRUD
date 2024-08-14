import express from "express";
import { createBlog, deleteBlog, getBlog, updateBlog } from "../controller/blogController.js";
import uploadImage from "../middleware/uploadImage.js";

const router = express.Router();

router.route("/blog").post(uploadImage, createBlog).get(getBlog);
router.route("/blog/:id").patch(updateBlog).delete(deleteBlog);
export default router