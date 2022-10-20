/*
  Warnings:

  - You are about to drop the column `parentTopic` on the `FormSection` table. All the data in the column will be lost.
  - Added the required column `parentTopic` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormSection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "formId" INTEGER,
    "formType" TEXT NOT NULL,
    "placeholder" TEXT NOT NULL,
    "isRequired" TEXT NOT NULL,
    "helpInfo" TEXT NOT NULL,
    CONSTRAINT "FormSection_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_FormSection" ("formId", "formType", "helpInfo", "id", "isRequired", "placeholder") SELECT "formId", "formType", "helpInfo", "id", "isRequired", "placeholder" FROM "FormSection";
DROP TABLE "FormSection";
ALTER TABLE "new_FormSection" RENAME TO "FormSection";
CREATE TABLE "new_Form" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "parentTopic" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Form" ("description", "id", "isDefault", "name") SELECT "description", "id", "isDefault", "name" FROM "Form";
DROP TABLE "Form";
ALTER TABLE "new_Form" RENAME TO "Form";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
