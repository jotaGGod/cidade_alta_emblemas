/*
  Warnings:

  - You are about to drop the `badges_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `badges_users` DROP FOREIGN KEY `badges_users_badges_id_fkey`;

-- DropForeignKey
ALTER TABLE `badges_users` DROP FOREIGN KEY `badges_users_users_id_fkey`;

-- DropTable
DROP TABLE `badges_users`;

-- CreateTable
CREATE TABLE `users_badges` (
    `id` VARCHAR(191) NOT NULL,
    `users_id` VARCHAR(191) NOT NULL,
    `badges_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users_badges` ADD CONSTRAINT `users_badges_users_id_fkey` FOREIGN KEY (`users_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_badges` ADD CONSTRAINT `users_badges_badges_id_fkey` FOREIGN KEY (`badges_id`) REFERENCES `Badges`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
