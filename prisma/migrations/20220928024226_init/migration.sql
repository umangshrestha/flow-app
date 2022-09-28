-- CreateTable
CREATE TABLE "Faculty" (
    "uwinID" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "topic" TEXT NOT NULL,
    "queryId" INTEGER,
    CONSTRAINT "Topic_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "Query" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Query" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uwinID" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'BBCafe',
    "description" TEXT NOT NULL,
    "isTeams" BOOLEAN NOT NULL DEFAULT false,
    "isMultiple" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Query_uwinID_fkey" FOREIGN KEY ("uwinID") REFERENCES "Faculty" ("uwinID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Faculty_uwinID_key" ON "Faculty"("uwinID");

-- CreateIndex
CREATE UNIQUE INDEX "Faculty_email_key" ON "Faculty"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_topic_key" ON "Topic"("topic");
