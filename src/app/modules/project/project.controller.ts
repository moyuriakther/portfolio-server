import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const addProject = catchAsync(async (req, res) => {
    const result = await ProjectServices.addProject(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Added Successfully",
      data: result,
    });
  });
const getProjects = catchAsync(async (req, res) => {
    const result = await ProjectServices.getProjects();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Projects Retrieved Successfully",
      data: result,
    });
  });
const getProjectById = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await ProjectServices.getProjectById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Retrieved Successfully",
      data: result,
    });
  });
const updateProject = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await ProjectServices.updateProject(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Updated Successfully",
      data: result,
    });
  });
const deleteProject = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await ProjectServices.deleteProject(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Deleted Successfully",
      data: result,
    });
  });

  export const ProjectController = {
    addProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
  };
  