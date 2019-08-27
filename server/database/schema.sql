DROP DATABASE IF EXISTS Ingredients;

CREATE DATABASE Ingredients;

USE Ingredients;



CREATE TABLE `Users` (
  `UserID` INT not null Auto_Increment,
  `name` varchar (50) COLLATE utf8_unicode_ci NOT NULL,
  `userName` varchar (50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar (50) COLLATE utf8_unicode_ci NOT NULL,
  UNIQUE(`userName`),
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT
CHARSET=utf8
COLLATE=utf8_unicode_ci;

CREATE TABLE `Foods` (
  `FoodsID` INT not null Auto_Increment,
  `item_name` varchar (50) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` INT COLLATE utf8_unicode_ci NOT NULL,
  `expiration` DATE COLLATE utf8_unicode_ci NOT NULL,
  FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`) ON DELETE CASCADE,
  PRIMARY KEY (`FoodsID`)
)ENGINE=InnoDB DEFAULT
CHARSET=utf8
COLLATE=utf8_unicode_ci;


