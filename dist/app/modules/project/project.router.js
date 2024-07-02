"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRouter = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const project_controller_1 = require("./project.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = (0, express_1.Router)();
router.get("/", project_controller_1.ProjectController.getProjects);
router.get("/:id", project_controller_1.ProjectController.getProjects);
router.post("/", 
//   validateRequest(petValidation.createPetValidation),
(0, auth_1.default)(client_1.UserRole.admin), project_controller_1.ProjectController.addProject);
router.put("/:id", (0, auth_1.default)(client_1.UserRole.admin), project_controller_1.ProjectController.updateProject);
router.delete("/:id", (0, auth_1.default)(client_1.UserRole.admin), project_controller_1.ProjectController.deleteProject);
exports.ProjectRouter = router;
