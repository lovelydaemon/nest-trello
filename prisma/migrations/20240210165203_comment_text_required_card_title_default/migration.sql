/*
  Warnings:

  - Made the column `text` on table `Comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "title" SET DEFAULT 'Noname';

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "text" SET NOT NULL;
