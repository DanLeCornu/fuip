/*
  Warnings:

  - You are about to drop the column `ip` on the `PostSuggestion` table. All the data in the column will be lost.
  - You are about to drop the column `ip` on the `Vote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[deviceId,postId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Vote_ip_deviceId_postId_key";

-- AlterTable
ALTER TABLE "PostSuggestion" DROP COLUMN "ip";

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "ip";

-- CreateIndex
CREATE UNIQUE INDEX "Vote_deviceId_postId_key" ON "Vote"("deviceId", "postId");
