CREATE DATABASE sandwhich_db;
USE sandwhich_db;

CREATE TABLE sandwhiches
(
	id int NOT NULL AUTO_INCREMENT,
	sandwhich varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);