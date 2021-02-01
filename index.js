const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "UserDB"
});

mysqlConnection.connect((err) => {
    if(!err) console.log("DB connection succeded.");
    else console.log("DB connection failed \n Error: " + JSON.stringify(err, undefined, 2));
});

app.listen(300, () => console.log("Express Server os runnign at port no: 30000"));
app.get("/users", (res, req) => {
    mysqlConnection.query("SELECT * FROM TB_USER", (err, rows, fields)=>{
        if(!err) console.log(rows);
        else console.log(err);
    });
});
