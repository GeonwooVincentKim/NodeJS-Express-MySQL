const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "UserDB",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err) console.log("DB connection succeded.");
    else console.log("DB connection failed \n Error: " + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log("Express Server os running at port no: 3000"));
app.get("/users", (req, res) => {
    mysqlConnection.query("SELECT * FROM TB_USER", (err, rows, fields)=>{
        if(!err) res.send(rows);
        else console.log(err);
    });
});

app.get("/users/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM TB_USER WHERE ID = ?", [req.params.id], (err, rows, fields)=>{
        if(!err) res.send(rows);
        else console.log(err);
    });
});

app.delete("/users/:id", (req, res) => {
    mysqlConnection.query("DELETE FROM TB_USER WHERE ID = ?", [req.params.id], (err, rows, fields)=>{
        if(!err) res.send(rows);
        else console.log(err);
    });
});

app.get('/', (req, res) => {
    console.log(req.params);
})

app.post('/', (req, res) => {
    console.log(req.body);
});

app.post("/users", (req, res) => {
    // let user = req.params.user;
    let values = req.body;
    let user_name = req.body.USER_NAME;
    // let user = req.body.TB_USER;
    // let user_sql = `INSERT INTO TB_USER SET ? `;
    console.log('req.body.ADDRESS: '+values);
    // let user_sql = "INSERT INTO TB_USER(`USER_NAME`, `EMAIL`, `IMAGE_URL`, `ADDRESS`) VALUES ('${req.body.user_name}', '?', '?', '?')";
    // let user_sql = "INSERT INTO TB_USER SET USER_NAME = '' ";
    let user_sql = "INSERT INTO TB_USER SET USER_NAME = ?, EMAIL = ?, IMAGE_URL = ?, ADDRESS = ?";
    mysqlConnection.query(user_sql, [values.USER_NAME, values.EMAIL,values.IMAGE_URL,values.ADDRESS], (err, rows, fields) => {
        if(!err) res.send(rows);
        else console.log(err);
    })
});

app.put("/users", (req, res) => {
    // let user = req.params.user;
    let values = req.body;
    let user_name = req.body.USER_NAME;
    // let user = req.body.TB_USER;
    // let user_sql = `INSERT INTO TB_USER SET ? `;
    console.log('req.body.ADDRESS: '+values);
    // let user_sql = "INSERT INTO TB_USER(`USER_NAME`, `EMAIaL`, `IMAGE_URL`, `ADDRESS`) VALUES ('${req.body.user_name}', '?', '?', '?')";
    // let user_sql = "INSERT INTO TB_USER SET USER_NAME = '' ";
    let user_sql = "UPDATE TB_USER SET USER_NAME = ?, EMAIL = ?, IMAGE_URL = ?, ADDRESS = ? WHERE ID = ?";
    mysqlConnection.query(user_sql, [values.USER_NAME, values.EMAIL,values.IMAGE_URL,values.ADDRESS, values.ID], (err, rows, fields) => {
        if(!err) res.send('Successfully updated the data');
        else console.log(err);
    })
});
