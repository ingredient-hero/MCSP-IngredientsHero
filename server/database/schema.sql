DROP DATABASE IF EXISTS Ingredients;

CREATE DATABASE Ingredients;

USE Ingredients;



CREATE TABLE `Users` (
  `UserID` INT not null Auto_Increment,
  `name` varchar (50),
  `userName` varchar (50),
  `password` varchar(50),
  `email` varchar (50),
  UNIQUE(Username),
  PRIMARY KEY (`UserID`)
);

CREATE TABLE Foods (
  `FoodsID` INT not null Auto_Increment,
  `item_name` varchar (50),
  `expiration` DATE,
  FOREIGN KEY (Users_userName) REFERENCES Users(userName) ON DELETE CASCADE,
  PRIMARY KEY (`FoodsID`)
);

-- CREATE TABLE EXP (
--   `ExpID` INT  not null Auto_Increment,
--   `Expiration_Date` DATE,
--    PRIMARY KEY (`ExpID`)
-- );


