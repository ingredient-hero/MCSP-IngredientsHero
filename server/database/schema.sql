DROP DATABASE IF EXISTS Ingredients;

CREATE DATABASE Ingredients;

USE Ingredients;

CREATE TABLE Users (
  ID INT NOT NULL AUTO_INCREMENT,
  Name_ varchar (50) NOT NULL,
  userName varchar (50) NOT NULL UNIQUE,
  password_ varchar(50) NOT NULL,
  email varchar (50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Foods (
  ID INT NOT NULL AUTO_INCREMENT,
  Item varchar (50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Expiration (
  ID INT NOT NULL AUTO_INCREMENT,
  expiration DATE NOT NULL
  PRIMARY KEY (ID)
);

SELECT Users.ID, Foods.Item FROM Users JOIN Foods ON Users.ID = Foods.Item;
SELECT Foods.Item, Expiration.Expiration_Date FROM Foods JOIN Expiration ON Foods.Item = Expiration.Expiration_Date;