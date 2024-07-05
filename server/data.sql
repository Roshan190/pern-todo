-- To Create DATABASE
CREATE DATABASE perntodo;

-- To Create TABLE TODO
CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    status BOOLEAN,
    date VARCHAR(300)
);

-- To Create TABLE for users
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_passpord VARCHAR(255),
);

-- To INSERT data in todos TABLE
INSERT INTO
    todos(id, user_email, title, status, date)
VALUES
    (
        0,
        'test@gmail.com',
        'Test Todo',
        false,
        'Thu Jul 04 2024 12:23:59 GMT+0530 (India Standard Time)'
    );