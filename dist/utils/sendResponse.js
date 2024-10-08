"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    res.status(data === null || data === void 0 ? void 0 : data.statusCode).json({
        statusCode: data.statusCode,
        success: data.success,
        message: data.message,
        meta: data.meta || null || undefined,
        data: data.data || null || undefined,
    });
};
exports.default = sendResponse;
