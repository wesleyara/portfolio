/*
  Warnings:

  - You are about to drop the column `details` on the `Track` table. All the data in the column will be lost.
  - Added the required column `schema` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Track" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "element" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "schema" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Track" ("count", "createdAt", "element", "id", "updatedAt") SELECT "count", "createdAt", "element", "id", "updatedAt" FROM "Track";
DROP TABLE "Track";
ALTER TABLE "new_Track" RENAME TO "Track";
CREATE UNIQUE INDEX "Track_element_key" ON "Track"("element");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
