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
exports.ResumeService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getResume = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.resume.findFirst();
    return result;
});
const updateResume = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data);
    // await prisma.resume.deleteMany();
    const result = yield prisma_1.default.resume.create({ data });
    return result;
});
exports.ResumeService = { getResume, updateResume };
