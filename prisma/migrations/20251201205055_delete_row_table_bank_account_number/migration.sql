/*
  Warnings:

  - You are about to drop the column `bankAccountNumber` on the `payment_confirmations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "private"."payment_confirmations" DROP COLUMN "bankAccountNumber";
