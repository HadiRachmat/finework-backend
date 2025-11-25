-- AlterTable
ALTER TABLE "private"."licenses_key" ADD COLUMN     "activatedAt" TIMESTAMP(6),
ADD COLUMN     "activatedBy" INTEGER,
ADD COLUMN     "iid" VARCHAR(255),
ADD COLUMN     "ownerId" INTEGER;
