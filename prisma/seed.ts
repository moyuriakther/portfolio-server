import { UserRole } from "@prisma/client";
import * as bcrypt from 'bcrypt'
import prisma from "../src/shared/prisma";

const seedAdmin = async () => {
    try {
        const isExistAdmin = await prisma.user.findFirst({
            where: {
                role: UserRole.admin
            }
        });

        if (isExistAdmin) {
            console.log("admin already exists!")
            return;
        };

        const hashedPassword = await bcrypt.hash("admin111", 12)

        const adminData = await prisma.user.create({
            data: {
                email: "admin@gmail.com",
                name: "Admin",
                password: hashedPassword,
                role: UserRole.admin,
            }
        });

        console.log("Admin Created Successfully!", adminData);
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await prisma.$disconnect();
    }
};

seedAdmin();