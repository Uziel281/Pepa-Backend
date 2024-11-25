-- CreateTable
CREATE TABLE `Restaurant` (
    `restaurant_id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `status` INTEGER NULL,
    `schedule` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `image_url` VARCHAR(191) NULL,
    `rating` DOUBLE NULL,

    PRIMARY KEY (`restaurant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dish` (
    `dish_id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NULL,
    `availability` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `price` INTEGER NULL,
    `category` VARCHAR(191) NULL,
    `available` BOOLEAN NULL,
    `image_url` VARCHAR(191) NULL,
    `promotional_price` DOUBLE NULL,
    `restaurant_id` INTEGER NULL,

    PRIMARY KEY (`dish_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
