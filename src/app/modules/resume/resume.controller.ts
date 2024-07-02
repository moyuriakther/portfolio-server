import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { ResumeService } from "./resume.service";

const getResume = catchAsync(async (req, res) => {
     const result = await ResumeService.getResume();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Retrieved Resume Successfully",
      data: result,
    });
});
const updateREsume = catchAsync(async (req, res) => {
     const result = await ResumeService.updateResume(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Resume Updated Successfully",
      data: result,
    });
});

export const ResumeController = {
    getResume,
    updateREsume
}