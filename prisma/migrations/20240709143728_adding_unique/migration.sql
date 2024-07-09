/*
  Warnings:

  - A unique constraint covering the columns `[element]` on the table `Track` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Track_element_key" ON "Track"("element");
