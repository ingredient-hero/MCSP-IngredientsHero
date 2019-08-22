DROP DATABASE IF EXISTS Ingredients;

CREATE DATABASE Ingredients;

USE Ingredients;

CREATE TABLE Users (
  ID INT,
  Name varchar (50),
  Username varchar (50) UNIQUE,
  Passwords varchar(50),
  Email varchar (50),
  PRIMARY KEY (ID)
);
CREATE TABLE Foods (
  ID INT,
  Item varchar (50),
  PRIMARY KEY (ID)
);
<<<<<<< HEAD
CREATE TABLE EXP (
  ID INT,
  Expiration_Date DATE 
);




=======

CREATE TABLE Expiration (
  ID INT NOT NULL AUTO_INCREMENT,
  expiration DATE NOT NULL
  PRIMARY KEY (ID)
);

SELECT Users.ID, Foods.Item FROM Users JOIN Foods ON Users.ID = Foods.Item;
SELECT Foods.Item, Expiration.Expiration_Date FROM Foods JOIN Expiration ON Foods.Item = Expiration.Expiration_Date;
>>>>>>> origin/dev
