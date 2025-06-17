-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "board_id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "gif_path" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
