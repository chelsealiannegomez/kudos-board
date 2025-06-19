-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
