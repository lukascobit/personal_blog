const express = require('express');
const mysql = require('mysql')
require('dotenv').config();


const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "lukas",
    password: process.env.PASSWORD,
    database: "test0"
})

db.connect()

app.get("/blogs", (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const sql = 'SELECT * FROM blogs;'
    db.query(sql, (err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})

const port = process.env.PORT
app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
})