const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const con = require("./app/models/db");

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
require("./app/routes/customer.routes.js")(app);

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to Geonwoo's application"});
});


// set port, listen for requests
app.listen(3005, () => {
    console.log("Server is running on port 3005.");
});
