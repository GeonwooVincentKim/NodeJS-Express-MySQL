const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const con = require("./app/models/db");

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to Geonwoo's application"});
});

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

const users = require("./app/controllers/user.controller");
app.post("/users", users.create);
app.get("/users", users.findAll);
app.get("/users/:userID", users.findOne);
app.put("/users/:userID", users.update);
app.delete("/users/:userID", users.delete);
app.delete("/users", users.deleteAll);
// module.exports = app => {
//     const users = require("../controllers/user.controller");

//     console.log("testing..asdfasddf");
//     app.post("/users", users.create);
//     app.get("/users", users.findAll);
//     app.get("/users/:userID", users.findOne);
//     app.put("/users/:userID", users.update);
//     app.delete("/users/:userID", useres.delete);
//     app.delete("/users", users.deleteAll);
// }
