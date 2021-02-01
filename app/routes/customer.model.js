module.exports = app => {
    const users = require("../controllers/user.controller");

    app.post("/users", users.create);
    app.get("/users", users.findAll);
    // app.get("/users/:userID", users.findOne);
    app.put("/users/:userID", users.update);
    app.delete("/users/:userID", useres.delete);
    app.delete("/users", users.deleteAll);
}