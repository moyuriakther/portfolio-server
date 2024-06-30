import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { loginServices } from "./login.service";

const loginUser = catchAsync(async (req, res) => {
    const result = await loginServices.loginUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Logged in Successfully",
    data: {
      accessToken: result.accessToken,   
    },
  });
});

export const loginController = {
  loginUser,
};
