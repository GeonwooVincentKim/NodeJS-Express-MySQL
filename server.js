const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var router = express.Router();
const con = require("./app/models/db");
const userRouter = require("./app/routes/users.routes");

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to Geonwoo's application"});
});
// const routeFunction = require("./app/routes/customer.routes.js")(app);
// routeFunction(app);
// app.use("/users", userRouter);
require("./app/routes/users.routes.js")(app);
const PORT = process.env.PORT || 3005;
// set port, listen for requests
app.listen(PORT, () => {
    console.log("Server is running on port 3005.");
});

module.export = app;
