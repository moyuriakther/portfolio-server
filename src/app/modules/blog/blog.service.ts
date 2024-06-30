import prisma from "../../../shared/prisma";

const createBlog = async (req: any) => {
    const result = await prisma.blog.create({ data: req.body });
    return result;
  };
const getBlogs = async () => {
    const result = await prisma.blog.findMany({   
        orderBy:{ createdAt: "desc" },
      });
    return result;
  };
const getBlogById = async (id: string) => {
    const result = await prisma.blog.findUniqueOrThrow({   
        where: {
            id,
          },
      });
    return result;
  };
const updateBlog = async (id: string, data: any) => {
  await prisma.blog.findUniqueOrThrow({   
        where: {
            id,
          },
      });
      const result = await prisma.blog.update({
        where: {
          id,
        },
        data,
      });
    return result;
  };
  const deleteBlog = async (id: string) => {
    await prisma.blog.findUniqueOrThrow({   
        where: {
            id,
          },
      });
    const result = await prisma.blog.delete({   
        where: {
            id,
          },
      });
    return result;
  };

  export const BlogServices = {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
}