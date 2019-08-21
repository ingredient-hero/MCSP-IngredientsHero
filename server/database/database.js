// const pass = require('../../sensitive.js')
const mysql = require('mysql');
const http = require('http');

const con = mysql.createConnection({
    host: 'database-ihbo.crmajtggct83.us-east-2.rds.amazonaws.com',
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    port: 3306
})

con.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connected to RDS MySQL database!');
})




module.exports = {con};