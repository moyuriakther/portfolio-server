"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_router_1 = require("../modules/login/login.router");
const project_router_1 = require("../modules/project/project.router");
const blog_router_1 = require("../modules/blog/blog.router");
const skill_router_1 = require("../modules/skill/skill.router");
const resume_router_1 = require("../modules/resume/resume.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/login",
        route: login_router_1.loginRouter,
    },
    {
        path: "/project",
        route: project_router_1.ProjectRouter,
    },
    {
        path: "/blog",
        route: blog_router_1.BlogRouter,
    },
    {
        path: "/skill",
        route: skill_router_1.SkillRouter,
    },
    {
        path: "/resume",
        route: resume_router_1.ResumeRouter,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
