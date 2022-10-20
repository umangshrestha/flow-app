/*
  Warnings:

  - You are about to drop the `FormElement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FormElementToTopic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "FormElement";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_FormElementToTopic";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "FormSection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "formId" INTEGER,
    "parentTopic" TEXT NOT NULL,
    "formType" TEXT NOT NULL,
    "placeholder" TEXT NOT NULL,
    "isRequired" TEXT NOT NULL,
    "helpInfo" TEXT NOT NULL,
    CONSTRAINT "FormSection_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_FormSectionToTopic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_FormSectionToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "FormSection" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FormSectionToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_FormSectionToTopic_AB_unique" ON "_FormSectionToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_FormSectionToTopic_B_index" ON "_FormSectionToTopic"("B");
