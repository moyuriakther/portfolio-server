"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeRouter = void 0;
const express_1 = require("express");
const resume_controller_1 = require("./resume.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
router.get("/", resume_controller_1.ResumeController.getResume);
router.patch("/", (0, auth_1.default)(client_1.UserRole.admin), resume_controller_1.ResumeController.updateREsume);
exports.ResumeRouter = router;
