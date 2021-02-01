const mysql = require("mysql");
var router = express.Router();
const server = require("../../server");
const dbConfig = require("../config/db.config");

// Create a connection to the DataBase
var connection = mysql.createConnection({
    // host: dbConfig.HOST,
    host: "localhost",
    // port: dbConfig.PORT,
    port: "3306",
    // user: dbConfig.USER,
    user: "root",
    // password: dbConfig.PASSWORD,
    password: "1234",
    // database: dbConfig.DB
    database: "UserDB"
});
console.log(connection);
console.log("Testing..");
// Open the MySQL connection
connection.connect(error => {
    if(error) throw error;
    console.log("Successfully connected to the DataBase");
    // con.query("SELECT * FROM TB_USER", function(err, result, fields){
    //     if(err) throw err;
    //     console.log(result);
    // });
});

module.exports = connection;