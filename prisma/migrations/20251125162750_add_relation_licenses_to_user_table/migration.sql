-- AddForeignKey
ALTER TABLE "private"."licenses_key" ADD CONSTRAINT "licenses_key_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "private"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
