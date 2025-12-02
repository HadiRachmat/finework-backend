/*
  Warnings:

  - Changed the type of `method` on the `payments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "private"."payments" DROP COLUMN "method",
ADD COLUMN     "method" INTEGER NOT NULL;
