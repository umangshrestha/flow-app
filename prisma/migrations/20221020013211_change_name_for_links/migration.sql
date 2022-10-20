/*
  Warnings:

  - Added the required column `topic` to the `ParentTopic` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ParentTopic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "topic" TEXT NOT NULL
);
INSERT INTO "new_ParentTopic" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "ParentTopic";
DROP TABLE "ParentTopic";
ALTER TABLE "new_ParentTopic" RENAME TO "ParentTopic";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
