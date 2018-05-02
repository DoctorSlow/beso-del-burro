### Schema

CREATE DATABASE burros_db;
USE burros_db;

CREATE TABLE burros
(
	id int NOT NULL AUTO_INCREMENT,
	burro_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
