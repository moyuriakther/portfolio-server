import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserRole } from "@prisma/client";
import { ProjectController } from "./project.controller";
import auth from "../../middlewares/auth";


const router = Router();

router.get("/",  ProjectController.getProjects);
router.get("/:id", ProjectController.getProjects);
router.post(
  "/",
//   validateRequest(petValidation.createPetValidation),
  auth(UserRole.admin),
  ProjectController.addProject
);
router.put("/:id", auth(UserRole.admin), ProjectController.updateProject);
router.delete("/:id", auth(UserRole.admin), ProjectController.deleteProject);

export const ProjectRouter = router;
