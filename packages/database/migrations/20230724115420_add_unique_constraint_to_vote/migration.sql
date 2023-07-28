/*
  Warnings:

  - A unique constraint covering the columns `[ip,deviceId,postId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Vote_ip_deviceId_postId_key" ON "Vote"("ip", "deviceId", "postId");
