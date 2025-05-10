-- CreateTable
CREATE TABLE `User` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(50) NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `gender` VARCHAR(10) NULL,
    `birth` DATETIME(3) NULL,
    `address` VARCHAR(40) NULL,
    `detail_address` VARCHAR(40) NULL,
    `status` VARCHAR(15) NULL,
    `inactive_date` DATETIME(3) NULL,
    `social_type` VARCHAR(10) NULL,
    `created_at` DATETIME(6) NULL,
    `updated_at` DATETIME(6) NULL,
    `phone_number` VARCHAR(20) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserAgree` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NULL,
    `terms_id` BIGINT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Terms` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodCategory` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(15) NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserPrefer` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NULL,
    `category_id` BIGINT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Region` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Store` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `region_id` BIGINT NULL,
    `name` VARCHAR(50) NULL,
    `address` VARCHAR(50) NULL,
    `score` DOUBLE NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mission` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `store_id` BIGINT NULL,
    `reward` INTEGER NULL,
    `deadline` DATETIME(3) NULL,
    `mission_spec` VARCHAR(191) NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserMission` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NULL,
    `mission_id` BIGINT NULL,
    `status` VARCHAR(15) NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NULL,
    `store_id` BIGINT NULL,
    `body` VARCHAR(191) NULL,
    `score` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReviewImage` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `review_id` BIGINT NULL,
    `image_url` VARCHAR(191) NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_favor_category` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `food_category_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserAgree` ADD CONSTRAINT `UserAgree_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAgree` ADD CONSTRAINT `UserAgree_terms_id_fkey` FOREIGN KEY (`terms_id`) REFERENCES `Terms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPrefer` ADD CONSTRAINT `UserPrefer_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPrefer` ADD CONSTRAINT `UserPrefer_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `FoodCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_region_id_fkey` FOREIGN KEY (`region_id`) REFERENCES `Region`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mission` ADD CONSTRAINT `Mission_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserMission` ADD CONSTRAINT `UserMission_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserMission` ADD CONSTRAINT `UserMission_mission_id_fkey` FOREIGN KEY (`mission_id`) REFERENCES `Mission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReviewImage` ADD CONSTRAINT `ReviewImage_review_id_fkey` FOREIGN KEY (`review_id`) REFERENCES `Review`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_favor_category` ADD CONSTRAINT `user_favor_category_food_category_id_fkey` FOREIGN KEY (`food_category_id`) REFERENCES `FoodCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_favor_category` ADD CONSTRAINT `user_favor_category_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
