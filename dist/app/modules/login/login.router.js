"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const login_controller_1 = require("./login.controller");
const router = (0, express_1.Router)();
router.post("/", login_controller_1.loginController.loginUser);
exports.loginRouter = router;
