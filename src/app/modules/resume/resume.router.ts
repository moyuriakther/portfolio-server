import { Router } from "express";
import { ResumeController } from "./resume.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = Router();

router.get("/",  ResumeController.getResume);
router.patch("/", auth(UserRole.admin), ResumeController.updateREsume);

export const ResumeRouter = router;