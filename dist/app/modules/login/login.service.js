"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginServices = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const jwtHelpers_1 = require("../../../utils/jwtHelpers");
const config_1 = __importDefault(require("../../config"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield prisma_1.default.user.findUniqueOrThrow({
        where: {
            email: payload.email,
        },
    });
    console.log(isUserExist);
    const isPasswordCorrect = yield bcrypt_1.default.compare(payload.password, isUserExist.password);
    if (!isPasswordCorrect) {
        throw new AppError_1.default(http_status_1.default.NOT_ACCEPTABLE, "Password incorrect");
    }
    const accessToken = jwtHelpers_1.jwtHelpers.generateToken({
        email: isUserExist.email,
        role: isUserExist.role,
    }, config_1.default.jwt.access_token_secret, config_1.default.jwt.access_token_expires_in);
    // const refreshToken = jwtHelpers.generateToken(
    //   {
    //     email: isUserExist.email,
    //     role: isUserExist.role,
    //   },
    //   config.jwt.refresh_token_secret as Secret,
    //   config.jwt.refresh_token_expires_in as string
    // );
    return {
        accessToken,
        // refreshToken,
    };
});
exports.loginServices = {
    loginUser,
};
