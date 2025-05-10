-- CreateTable
CREATE TABLE `Proponent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `proponentId` VARCHAR(191) NOT NULL,
    `departmentId` INTEGER NULL,
    `officeId` INTEGER NULL,
    `proponentType` ENUM('Insider', 'Outsider') NOT NULL,
    `proponentStatus` ENUM('Pending', 'Approved', 'Rejected') NOT NULL,
    `FullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Proponent_proponentId_key`(`proponentId`),
    UNIQUE INDEX `Proponent_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
