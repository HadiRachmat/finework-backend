/*
  Warnings:

  - Added the required column `plainText` to the `licenses_key` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "private"."licenses_key" ADD COLUMN     "plainText" VARCHAR(255) NOT NULL;
