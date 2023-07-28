-- CreateTable
CREATE TABLE "PostSuggestion" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "ip" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostSuggestion_pkey" PRIMARY KEY ("id")
);
