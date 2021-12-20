const express = require('express');
const mysql = require('mysql')
require('dotenv').config();
const app = express()
const cors = require("cors")

const db = mysql.createConnection({
    host: "localhost",
    user: "lukas",
    password: process.env.PASSWORD,
    database: "test0"
})

db.connect()

//middleware
app.use(cors());
app.use(express.json())



//get all blogs
app.get("/blogs", (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const sql = `
    SELECT 
    id,
    title, 
    body, 
    DATE_FORMAT(posted_date, '%d/%m/%Y %H:%i') AS posted_date
    FROM blogs;`
    db.query(sql, (err, result)=>{
        if(err) throw err;
        res.send(result)
    })
});
//get one blog
app.get("/blogs/:id", (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const sql = `
    SELECT
    blogs.id,
    blogs.title, 
    blogs.body, 
    DATE_FORMAT(blogs.posted_date, '%d/%m/%Y %H:%i') AS posted_date,
    comments.id,
    comments.username,
    comments.body AS comment_body
    FROM blogs
    LEFT JOIN comments
    ON blogs.id = comments.blog_id
    WHERE blogs.id = ?;`
    db.query(sql,[req.params.id], (err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.post("/blogs/:id", (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const post = req.body
    console.log(post);
    const sql = `
    INSERT INTO comments(blog_id, username, body) VALUES(?, ?, ?) ;
    `
    db.query(sql,[req.params.id,post.username, post.body], (err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})

const port = process.env.PORT
app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
    
})