CREATE DATABASE tribal;
USE tribal;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;
CREATE TABLE users (
    id BIGINT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE products (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO users (username, password, role) VALUES 
('admin1', 'admin123', 'admin'),
('artisan1', 'artisan123', 'artisan'),
('customer1', 'customer123', 'customer'),
('consultant1', 'consultant123', 'consultant');
INSERT INTO products (name, price, image_url) VALUES 
('Handcrafted Bamboo Basket', '₹1,200', 'product1'),
('Tribal Warli Painting', '₹3,500', 'product2'),
('Dokra Art Horse', '₹2,800', 'product3'),
('Handwoven Naga Shawl', '₹4,500', 'product4'),
('Terracotta Decor Set', '₹1,800', 'product5');
SELECT * FROM users;
SELECT * FROM products;