CREATE DATABASE Ingredients;

USE Ingredients;

CREATE TABLE Users (
  ID INT NOT NULL AUTO_INCREMENT,
  Name varchar (50) NOT NULL,
  userNames varchar (50) NOT NULL UNIQUE,
  password varchar(50) NOT NULL,
  email varchar (50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Foods (
  ID INT NOT NULL AUTO_INCREMENT,
  Item varchar (50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE EXP (
  ID INT NOT NULL AUTO_INCREMENT,
  expiration DATE NOT NULL
);

SELECT Users.ID, Foods.Item FROM Users JOIN Foods ON Users.ID = Foods.Item;
SELECT Foods.Item, EXP.Expiration_Date FROM Foods JOIN EXP ON Foods.Item = EXP.Expiration_Date;