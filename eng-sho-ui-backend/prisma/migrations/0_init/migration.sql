-- CreateTable
CREATE TABLE `words` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `english` VARCHAR(512) NOT NULL,
    `shona` VARCHAR(512) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

