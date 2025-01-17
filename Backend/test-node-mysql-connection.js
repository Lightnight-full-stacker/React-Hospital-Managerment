const mysql = require('mysql')

console.log("import lib");

let connection = mysql.createConnection({
    host: 'localhost', // host for connection
    // port: 3306, // default port for mysql is 3306
    database: 'nodelogin', // database from which we want to connect out node application
    user: 'root', // username of the mysql connection
    password: '00000000' // password of the mysql connection
});

connection.connect(function (err) {
    if (err) {
        throw err;
        console.log("error occured while connecting");
    }
    else {
        console.log("connection created with Mysql successfully");
    }
});