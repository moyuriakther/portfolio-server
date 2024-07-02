"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBlog = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.create({ data: req.body });
    return result;
});
const getBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.findMany({
        orderBy: { createdAt: "desc" },
    });
    return result;
});
const getBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.findUniqueOrThrow({
        where: {
            id,
        },
    });
    return result;
});
const updateBlog = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.blog.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const result = yield prisma_1.default.blog.update({
        where: {
            id,
        },
        data,
    });
    return result;
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.blog.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const result = yield prisma_1.default.blog.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.BlogServices = {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
};
