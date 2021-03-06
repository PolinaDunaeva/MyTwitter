DROP DATABASE StarSpace;
CREATE DATABASE StarSpace;
USE StarSpace;

CREATE TABLE IF NOT EXISTS USER(
USER_ID BIGINT NOT NULL AUTO_INCREMENT,
NAME VARCHAR(50) NOT NULL,
PRIMARY KEY(USER_ID));

CREATE TABLE IF NOT EXISTS POST(
POST_ID BIGINT NOT NULL AUTO_INCREMENT,
USER_ID BIGINT NOT NULL,
DESCRIPTION VARCHAR(200) NOT NULL,
CREATED_AT DATETIME NOT NULL,
PHOTO_LINK VARCHAR(2048) DEFAULT NULL,
LIKES BIGINT DEFAULT NULL,
CONSTRAINT POST_USER_FK FOREIGN KEY(USER_ID) REFERENCES USER(USER_ID)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
PRIMARY KEY(POST_ID));

CREATE TABLE IF NOT EXISTS HASHTAG(
HASHTAG_ID BIGINT NOT NULL AUTO_INCREMENT,
NAME VARCHAR(50) NOT NULL,
PRIMARY KEY(HASHTAG_ID));


INSERT INTO USER (USER_ID, NAME) 
VALUES
(1, 'Polina'),
(2, 'Anya'),
(3, 'MaXik'),
(4, 'Anonimus'),
(5, 'Olga'),
(6, 'Petya'),
(7, 'Petr'),
(8, 'RainbowPauline'),
(9, 'LOL'),
(10, 'userNEKTO');


INSERT INTO POST (POST_ID, USER_ID, DESCRIPTION, CREATED_AT, PHOTO_LINK, LIKES)
VALUES
(99, 1, 'Nice!', NOW(), 'www.photo.com', 405),
(100, 1, 'I like flowers', NOW(), 'www.photo2.com', 100),
(101, 7, 'PROGRAMMING', '2020-05-10 15:39:00', 'www.photo3.com', 10),
(102, 10, 'HAHA!1!', '2020-05-18 19:00:00', NULL, 99),
(103, 1, 'hello', NOW(), NULL, 13),
(DEFAULT, 2, 'hello, my FRIENDS!', NOW(), 'www.photo4.com', 5),
(DEFAULT, 3, 'I LOVE YOU!', NOW(), NULL, 999),
(DEFAULT, 4, 'My fav film', '2020-03-01 13:00:00', NULL, 101),
(DEFAULT, 1, 'W.H.Y', NOW(), 'www.photo5.com', 17),
(DEFAULT, 5, 'Goodbye!', NOW(), 'www.photo6.com', 93);


INSERT INTO HASHTAG (HASHTAG_ID, NAME)
VALUES
(1, 'Oh'),
(2, 'no'),
(3, 'hello'),
(4, 'likes'),
(5, 'nature'),
(6, 'hahaahaaha'),
(7, 'LIFE'),
(8, 'LOVE'),
(9, 'Happy'),
(10, 'I');




