DROP DATABASE IF EXISTS Ingredients;

CREATE DATABASE Ingredients;

USE Ingredients;



CREATE TABLE `Users` (
  `UserID` INT not null Auto_Increment,
  `Name` varchar (50),
  `Username` varchar (50),
  `Password` varchar(50),
  `Email` varchar (50),
  UNIQUE(Username),
  PRIMARY KEY (`UserID`)
);

CREATE TABLE Foods (
  `FoodsID` INT not null Auto_Increment,
  `Item` varchar (50),
  `Expiration_Date` DATE,
  FOREIGN KEY (Users_Username) REFERENCES Users(Username) ON DELETE CASCADE,
  PRIMARY KEY (`FoodsID`)
);

-- CREATE TABLE EXP (
--   `ExpID` INT  not null Auto_Increment,
--   `Expiration_Date` DATE,
--    PRIMARY KEY (`ExpID`)
-- );


