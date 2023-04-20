-- CreateTable
CREATE TABLE "Team" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "strength" INTEGER NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "tier" INTEGER NOT NULL
);
