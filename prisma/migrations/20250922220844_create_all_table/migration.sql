-- CreateTable
CREATE TABLE "private"."contacts" (
    "id" SERIAL NOT NULL,
    "contact" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255),
    "price" VARCHAR(50) NOT NULL,
    "stock" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."licenses_key" (
    "id" SERIAL NOT NULL,
    "encryptedKey" VARCHAR(255) NOT NULL,
    "keyHash" VARCHAR(255) NOT NULL,
    "activationLimit" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "soldAt" TIMESTAMP(6),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "productId" INTEGER NOT NULL,
    "supplierId" INTEGER,

    CONSTRAINT "licenses_key_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."supplier" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "contact" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."orders" (
    "id" SERIAL NOT NULL,
    "amount" VARCHAR(50) NOT NULL,
    "status" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."order_items" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."testimonials" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."payments" (
    "id" SERIAL NOT NULL,
    "amount" VARCHAR(50) NOT NULL,
    "method" VARCHAR(50) NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "status" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."payment_confirmations" (
    "id" SERIAL NOT NULL,
    "bankName" VARCHAR(100) NOT NULL,
    "bankAccountName" VARCHAR(100) NOT NULL,
    "bankAccountNumber" VARCHAR(50) NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "status" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "paymentId" INTEGER NOT NULL,

    CONSTRAINT "payment_confirmations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."audit_logs" (
    "id" SERIAL NOT NULL,
    "action" VARCHAR(100) NOT NULL,
    "details" VARCHAR(255),
    "actor" VARCHAR(100),
    "target" VARCHAR(100),
    "ipAddress" VARCHAR(50),
    "uaserAgent" VARCHAR(255),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."attachment" (
    "id" SERIAL NOT NULL,
    "fileName" VARCHAR(255) NOT NULL,
    "fileType" VARCHAR(100) NOT NULL,
    "filePath" VARCHAR(255) NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "attachmentAbleId" INTEGER NOT NULL,
    "attachmentAbleType" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "attachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contacts_userId_key" ON "private"."contacts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "orders_id_userId_key" ON "private"."orders"("id", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "payments_orderId_key" ON "private"."payments"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "payment_confirmations_paymentId_key" ON "private"."payment_confirmations"("paymentId");

-- AddForeignKey
ALTER TABLE "private"."contacts" ADD CONSTRAINT "contacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "private"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "private"."categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."licenses_key" ADD CONSTRAINT "licenses_key_productId_fkey" FOREIGN KEY ("productId") REFERENCES "private"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."licenses_key" ADD CONSTRAINT "licenses_key_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "private"."supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "private"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."order_items" ADD CONSTRAINT "order_items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "private"."orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."order_items" ADD CONSTRAINT "order_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "private"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."testimonials" ADD CONSTRAINT "testimonials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "private"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."payments" ADD CONSTRAINT "payments_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "private"."orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."payment_confirmations" ADD CONSTRAINT "payment_confirmations_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "private"."payments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
