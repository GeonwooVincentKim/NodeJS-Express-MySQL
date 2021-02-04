var express = require('express');
var router = express.Router();

const users = require("../controllers/user.controller");

router.post("/users", users.create);
router.get("/users", users.findAll);
router.get("/users/:userID", users.findOne);
router.put("/users/:userID", users.update);
router.delete("/users/:userID", users.delete);
router.delete("/users", users.deleteAll);

module.exports = router;
