import prisma from "../../../shared/prisma";

const createSkill = async (req: any) => {
    console.log(req.body)
    const result = await prisma.skill.create( {data: req.body} );
    return result;
  };
const getSkills = async () => {
    const result = await prisma.skill.findMany({   
        orderBy:{ createdAt: "desc" },
      });
    return result;
  };
const getSkillById = async (id: string) => {
    const result = await prisma.skill.findFirstOrThrow({   
    where: {
      id: id
    }
      });
    return result;
  };
const updateSkill = async (id: string, data: any) => {
    await prisma.skill.findUniqueOrThrow({   
          where: {
              id,
            },
        });
        const result = await prisma.skill.update({
          where: {
            id,
          },
          data,
        });
      return result;
    };
export const SkillServices = {
    createSkill,
    getSkills,
    updateSkill,
    getSkillById
}