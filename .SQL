--this file doesnt do anything, its only for info

CREATE TABLE blogs(
    id INT AUTO_INCREMENT,
    title VARCHAR(255),
    body VARCHAR(1000), 
    is_edited TINYINT(1),
    posted_date DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT,
    blog_id INT, 
    body VARCHAR(255),
    posted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(blog_id) REFERENCES blogs(id)    
);

SELECT 
blogs.id,
blogs.title, 
blogs.body, 
comments.id,
comments.body AS comment_body
FROM blogs
LEFT JOIN comments
ON blogs.id = comments.blog_id
ORDER BY comments.id;

CREATE TABLE replies(
    id INT AUTO_INCREMENT,
    comment_id INT,
    blog_id INT,
    body VARCHAR(1000),
    posted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(comment_id) REFERENCES comments(id),
    FOREIGN KEY(blog_id) REFERENCES blogs(id)
);



ALTER TABLE blogs
ALTER COLUMN posted_date


INSERT INTO blogs(title, body, genre) VALUES('test', 'test input', 'test')