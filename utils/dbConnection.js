const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nodejs_login'
});

module.exports = dbConnection.promise();