"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRouter = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const skill_controller_1 = require("./skill.controller");
const router = (0, express_1.Router)();
router.get("/", skill_controller_1.SkillController.getSkills);
router.get("/:id", (0, auth_1.default)(client_1.UserRole.admin), skill_controller_1.SkillController.getSkillById);
router.post("/", 
//   validateRequest(petValidation.createPetValidation),
(0, auth_1.default)(client_1.UserRole.admin), skill_controller_1.SkillController.createSkill);
router.put("/:id", (0, auth_1.default)(client_1.UserRole.admin), skill_controller_1.SkillController.updateSkill);
exports.SkillRouter = router;
