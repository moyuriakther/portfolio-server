"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRouter = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const blog_controller_1 = require("./blog.controller");
const router = (0, express_1.Router)();
router.get("/", blog_controller_1.BlogController.getBlogs);
router.get("/:id", blog_controller_1.BlogController.getBlogById);
router.post("/", (0, auth_1.default)(client_1.UserRole.admin), blog_controller_1.BlogController.createBlog);
router.put("/:id", (0, auth_1.default)(client_1.UserRole.admin), blog_controller_1.BlogController.updateBlog);
router.delete("/:id", (0, auth_1.default)(client_1.UserRole.admin), blog_controller_1.BlogController.deleteBlog);
exports.BlogRouter = router;
