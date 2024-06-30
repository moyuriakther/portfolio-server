import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { BlogController } from "./blog.controller";

const router = Router();

router.get("/",  BlogController.getBlogs);
router.get("/:id", BlogController.getBlogById);
router.post(
  "/",
  auth( UserRole.admin),
  BlogController.createBlog
);
router.put("/:id", auth(UserRole.admin), BlogController.updateBlog);
router.delete("/:id", auth(UserRole.admin), BlogController.deleteBlog);

export const BlogRouter = router;
