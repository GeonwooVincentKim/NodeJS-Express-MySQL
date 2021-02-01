const sql = require("./db");

const User = function(userInfo){
    this.ID = userInfo.ID;
    this.USER_NAME = userInfo.USER_NAME;
    this.EMAIL = userInfo.EMAIL;
    this.IMAGE_URL = userInfo.IMAGE_URL;
    this.ADDRESS = userInfo.ADDRESS;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO TB_USER SET ?", newUser, (err, res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Create New User: ", {ID: res.insertID, ...newUser});
        return(null, {id: res.insertID, ...newUser});
    })
};

User.findByID = (userID, result) => {
    sql.query(`SELECT * FROM TB_USER WHERE ID = ${userID}`, (err, res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
        if(res.length){
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found User with the ID
        result({kind: "not_found"}, null);
    })
}

User.getAll = result => {
    sql.query("SELECT * FROM TB_USER", (err, res) => {
        if(err){
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("customers: ", res);
        return(null, res);
    });
};

User.updateByID = (id, user, result) => {
    sql.query(
        "UPDATE TB_USER SET EMAIL = ?, USER_NAME = ?, IMAGE_URL = ? ADDRESS = ?, WHERE ID = ?",
        [user.EMAIL, user.USER_NAME, user.IMAGE_URL, user.ADDRESS, id],
        (err, res) => {
            if(err){
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if(res.affectedRows == 0){
                // not found User with the ID
                result({kind: "not_found"}, null);
                return;
            }

            console.log("Updated User: ", {id: id, ...user});
            return(null, {id: id, ...user});
        }
    )
}