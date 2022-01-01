--this file doesnt do anything, its only for info

CREATE TABLE blogs(
    id INT AUTO_INCREMENT,
    title VARCHAR(255),
    body VARCHAR(1000), 
    is_edited TINYINT(1),
    posted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
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
WHERE blogs.id = 1;

CREATE TABLE replies(
    id INT AUTO_INCREMENT,
    comment_id INT,
    blog_id INT,
    body VARCHAR(50000),
    posted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(comment_id) REFERENCES comments(id),
    FOREIGN KEY(blog_id) REFERENCES blogs(id)
);

CREATE TABLE projects(
    id INT AUTO_INCREMENT,
    project_name VARCHAR(255),
    body VARCHAR(1000),
    link VARCHAR(500),
    posted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);


ALTER TABLE blogs
ALTER COLUMN posted_date


INSERT INTO blogs(title, body, genre) VALUES('test', 'test input', 'test');
INSERT INTO comments(blog_id, body, username) VALUES(3, 'test input', 'test user');
INSERT INTO projects(project_name, body, link) VALUES('Crabgrab', 'a game where you catch aliens', 'crabgrab.netlify.app');


ALTER TABLE blogs 
    MODIFY posted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE blogs 
MODIFY is_edited TINYINT(1) DEFAULT '0' NOT NULL;



--delete duplicates
DELETE t1 FROM projects t1
INNER JOIN projects t2 
WHERE 
    t1.id < t2.id AND 
    t1.project_name = t2.project_name;


SELECT 
    project_name, COUNT(project_name)
FROM
    projects
GROUP BY 
    project_name
HAVING 
    COUNT(project_name) > 1;