// require("../routes/customer.routes")(app);
// app.listen(...);

const User = require("../models/user.model");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    // Create a Customer
    const User = new User({
        ID = req.body.ID,
        USER_NAME = req.body.USER_NAME,
        EMAIL = req.body.EMAIL,
        IMAGE_URL = req.body.IMAGE_URL,
        ADDRESS = req.body.ADDRESS,
    });
    
    // Save Customer in the database
    Customer.create(user, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the User."
        });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving users."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    User.findById(req.params.userID, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
            res.status(404).send({
                message: `Not found User with id ${req.params.userID}.`
            });
            } else {
            res.status(500).send({
                message: "Error retrieving User with id " + req.params.userID
            });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    User.updateById(
        req.params.userID,
        new User(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userID}.`
                });
                } else {
                res.status(500).send({
                    message: "Error updating User with id " + req.params.userID
                });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Customer.remove(req.params.userID, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userID}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete User with id " + req.params.userID
                });
            }
        } else res.send({ message: `User was deleted successfully!` });
    });
};

exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while removing all users."
            });
        else res.send({ message: `All Users were deleted successfully!` });
    });
};