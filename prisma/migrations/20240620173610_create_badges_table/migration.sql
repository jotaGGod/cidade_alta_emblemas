-- CreateTable
CREATE TABLE `Badges` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(30) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `image` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Badges_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
