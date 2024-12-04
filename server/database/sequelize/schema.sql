-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema movie_reviews
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema movie_reviews
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `movie_reviews` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `movie_reviews` ;

-- -----------------------------------------------------
-- Table `movie_reviews`.`movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie_reviews`.`movies` (
  `idmovies` INT NOT NULL AUTO_INCREMENT,
  `poster` VARCHAR(255) NOT NULL,
  `trailler` VARCHAR(255) NULL DEFAULT NULL,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `duration` VARCHAR(255) NOT NULL,
    `genre` VARCHAR(255) NOT NULL,
  `rating` DECIMAL(3,1) NOT NULL,
  PRIMARY KEY (`idmovies`),
  UNIQUE INDEX `idmovies_UNIQUE` (`idmovies` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `movie_reviews`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie_reviews`.`comments` (
  `idcomments` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(45) NULL DEFAULT NULL,
  `movies_idmovies` INT NOT NULL,
  PRIMARY KEY (`idcomments`),
  UNIQUE INDEX `idcomments_UNIQUE` (`idcomments` ASC) VISIBLE,
  INDEX `fk_comments_movies_idx` (`movies_idmovies` ASC) VISIBLE,
  CONSTRAINT `fk_comments_movies`
    FOREIGN KEY (`movies_idmovies`)
    REFERENCES `movie_reviews`.`movies` (`idmovies`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `movie_reviews`.`rates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie_reviews`.`rates` (
  `idrates` INT NOT NULL AUTO_INCREMENT,
  `rate` VARCHAR(45) NOT NULL,
  `movies_idmovies` INT NOT NULL,
  PRIMARY KEY (`idrates`),
  UNIQUE INDEX `idrates_UNIQUE` (`idrates` ASC) VISIBLE,
  INDEX `fk_rates_movies1_idx` (`movies_idmovies` ASC) VISIBLE,
  CONSTRAINT `fk_rates_movies1`
    FOREIGN KEY (`movies_idmovies`)
    REFERENCES `movie_reviews`.`movies` (`idmovies`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
