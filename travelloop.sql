-- Create Database
CREATE DATABASE IF NOT EXISTS travelloop;

USE travelloop;

-- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- Bookings Table (IMPORTANT for your Travel Loop project)
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100),
    email VARCHAR(100),
    country VARCHAR(100),
    price INT,
    travel_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);