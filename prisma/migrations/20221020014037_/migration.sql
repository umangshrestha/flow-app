/*
  Warnings:

  - A unique constraint covering the columns `[topic]` on the table `ParentTopic` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[topic]` on the table `Topic` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ParentTopic_topic_key" ON "ParentTopic"("topic");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_topic_key" ON "Topic"("topic");
