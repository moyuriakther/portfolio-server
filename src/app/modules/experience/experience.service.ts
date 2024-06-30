// import prisma from "../../../shared/prisma";

// const addProject = async (req: any) => {
//     console.log(req.body)
//     const result = await prisma.project.create( {data: req.body} );
//     return result;
//   };
// const getProjects = async () => {
//     const result = await prisma.project.findMany({   
//         orderBy:{ createdAt: "desc" },
//       });
//     return result;
//   };
// const getProjectById = async (id: string) => {
//     const result = await prisma.project.findUniqueOrThrow({   
//         where: {
//             id,
//           },
//       });
//     return result;
//   };
// const updateProject = async (id: string, data: any) => {
//   await prisma.project.findUniqueOrThrow({   
//         where: {
//             id,
//           },
//       });
//       const result = await prisma.project.update({
//         where: {
//           id,
//         },
//         data,
//       });
//     return result;
//   };
//   const deleteProject = async (id: string) => {
//     await prisma.project.findUniqueOrThrow({   
//         where: {
//             id,
//           },
//       });
//     const result = await prisma.project.delete({   
//         where: {
//             id,
//           },
//       });
//     return result;
//   };

//   export const ProjectServices = {
//     addProject,
//     getProjects,
//     getProjectById,
//     updateProject,
//     deleteProject

//   }