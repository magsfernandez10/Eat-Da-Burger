
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ("Big Mac");
INSERT INTO burgers (burger_name) VALUES ("Whopper");
INSERT INTO burgers (burger_name) VALUES ("Veggie Burger");
INSERT INTO burgers (burger_name) VALUES ("Turkey Burger");
INSERT INTO burgers (burger_name, devoured) VALUES ("Cheeseburger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Portillo's", true);