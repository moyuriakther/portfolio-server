import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { SkillServices } from "./skill.service";

const createSkill = catchAsync(async (req, res) => {
    const result = await SkillServices.createSkill(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Skill Created Successfully",
      data: result,
    });
  });
const getSkills = catchAsync(async (req, res) => {
    const result = await SkillServices.getSkills();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Skills Retrieved Successfully",
      data: result,
    });
  });
const updateSkill = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await SkillServices.updateSkill(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Skill Updated Successfully",
      data: result,
    });
  });

  export const SkillController = {
    createSkill,
    getSkills,
    updateSkill
}