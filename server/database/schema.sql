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

CREATE TABLE `Foods` (
  `FoodsID` INT not null Auto_Increment,
  `item_name` varchar (50),
  `UserID` INT,
  `expiration` DATE,
  FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
  PRIMARY KEY (`FoodsID`)
);


