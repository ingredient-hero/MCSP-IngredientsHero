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

CREATE TABLE EXP (
  ID INT,
  Expiration_Date DATE 
);




