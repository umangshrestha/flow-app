/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Query` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Query` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Query" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uwinID" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'BBCafe',
    "description" TEXT NOT NULL,
    "isTeams" BOOLEAN NOT NULL DEFAULT false,
    "isMultiple" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Query_uwinID_fkey" FOREIGN KEY ("uwinID") REFERENCES "Faculty" ("uwinID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Query_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Query" ("createdAt", "description", "id", "isMultiple", "isTeams", "location", "updatedAt", "uwinID") SELECT "createdAt", "description", "id", "isMultiple", "isTeams", "location", "updatedAt", "uwinID" FROM "Query";
DROP TABLE "Query";
ALTER TABLE "new_Query" RENAME TO "Query";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
