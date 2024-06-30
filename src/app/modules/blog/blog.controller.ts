import httpStatus from "http-status";
import sendResponse from "../../../utils/sendResponse";
import { BlogServices } from "./blog.service";
import catchAsync from "../../../utils/catchAsync";

const createBlog = catchAsync(async (req, res) => {
    // console.log(req, "user");
    const result = await BlogServices.createBlog(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blog Created successfully",
      data: result,
    });
  });
const getBlogs = catchAsync(async (req, res) => {
    // console.log(req, "user");
    const result = await BlogServices.getBlogs();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blogs Retrieved successfully",
      data: result,
    });
  });
const getBlogById = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await BlogServices.getBlogById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blog Retrieved successfully",
      data: result,
    });
  });
const updateBlog = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await BlogServices.updateBlog(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blog Updated successfully",
      data: result,
    });
  });
const deleteBlog = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await BlogServices.deleteBlog(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blog Deleted successfully",
      data: result,
    });
  });

  export const BlogController = {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
}