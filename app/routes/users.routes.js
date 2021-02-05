// var express = require('express');
// var router = express.Router();

// const users = require("../controllers/user.controller");

// router.post("/users", users.create);
// router.get("/users", users.findAll);
// router.get("/users/:userID", users.findOne);
// router.put("/users/:userID", users.update);
// router.delete("/users/:userID", users.delete);
// router.delete("/users", users.deleteAll);

// module.exports = router;

module.exports = app => {
    const users = require("../controllers/user.controller.js");

    app.post("/users", users.create);
    app.get("/users", users.findAll);
    app.get("/users/:userID", users.findOne);
    app.put("/users/:userID", users.update);
    app.delete("/users/:userID", users.delete);
    app.delete("/users", users.deleteAll);
}