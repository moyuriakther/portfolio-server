/*
  Warnings:

  - Added the required column `level` to the `skills` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('familiar', 'comfortable', 'expertise');

-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "level" "SkillLevel" NOT NULL;
