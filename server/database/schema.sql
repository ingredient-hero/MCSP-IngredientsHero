CREATE DATABASE Ingredients;

USE Ingredients;

CREATE TABLE Users (
  ID INT AUTO_INCREMENT,
  Names varchar (50),
  Username varchar (50) UNIQUE,
  Passwords varchar(50),
  Email varchar (50),
  PRIMARY KEY (ID)
);

CREATE TABLE Foods (
  ID INT,
  Item varchar (50),
  expirationDate DATE,
  PRIMARY KEY (ID),
  INDEX U_Name (Users_Username),
  FOREIGN KEY (Users_Username)
    REFERENCES Users(Username)
    ON DELETE CASCADE
);