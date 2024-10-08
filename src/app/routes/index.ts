import { Router } from "express";
import { loginRouter } from "../modules/login/login.router";
import { ProjectRouter } from "../modules/project/project.router";
import { BlogRouter } from "../modules/blog/blog.router";
import { SkillRouter } from "../modules/skill/skill.router";
import { ResumeRouter } from "../modules/resume/resume.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/login",
    route: loginRouter,
  },
  {
    path: "/project",
    route: ProjectRouter,
  },
  {
    path: "/blog",
    route: BlogRouter,
  },
  {
    path: "/skill",
    route: SkillRouter,
  },
  {
    path: "/resume",
    route: ResumeRouter,
  },
  
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
