/*
  Warnings:

  - You are about to drop the column `plainText` on the `licenses_key` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "private"."licenses_key" DROP COLUMN "plainText";
