/*
  Warnings:

  - You are about to drop the column `contact` on the `supplier` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `supplier` table. All the data in the column will be lost.
  - Added the required column `contactPerson` to the `supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supplierName` to the `supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "private"."supplier" DROP COLUMN "contact",
DROP COLUMN "name",
ADD COLUMN     "contactPerson" VARCHAR(100) NOT NULL,
ADD COLUMN     "email" VARCHAR(100),
ADD COLUMN     "phoneNumber" VARCHAR(50),
ADD COLUMN     "supplierName" VARCHAR(100) NOT NULL;
