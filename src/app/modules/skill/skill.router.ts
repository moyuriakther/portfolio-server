import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth";
import { SkillController } from "./skill.controller";


const router = Router();

router.get("/",  SkillController.getSkills);
router.post(
  "/",
//   validateRequest(petValidation.createPetValidation),
  auth(UserRole.admin),
  SkillController.createSkill
);
router.put("/:id", auth(UserRole.admin), SkillController.updateSkill);

export const SkillRouter = router;
