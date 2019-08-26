CREATE DATABASE Ingredients;

USE Ingredients;

CREATE TABLE Users (
  ID INT NOT NULL,
  Names varchar (50) NOT NULL,
  Username varchar (50) NOT NULL UNIQUE,
  Passwords varchar(50) NOT NULL,
  Email varchar (50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Foods (
  ID INT,
  Item varchar (50) NOT NULL,
  expirationDate DATE NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Users (ID, Names, Username, Passwords, Email) VALUES (1, 'Herman', 'hermanwill', 'CoCo', 'hermanwill@milly.com');
INSERT INTO Foods (ID, Item, expirationDate) VALUES (1, 'eggs', 20191001);
