import prisma from "../../../shared/prisma";

const getResume = async () => {
    const result = await prisma.resume.findFirst();
    return result;
  };
const updateResume = async (data: any) => {
    console.log(data)
    // await prisma.resume.deleteMany();
    const result = await prisma.resume.upsert(data);
        return result;
};

export const ResumeService = { getResume, updateResume};
