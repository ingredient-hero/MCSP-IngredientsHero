const pass = require('../../sensitive.js')
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'http://database-ihbo.crmajtggct83.us-east-2.rds.amazonaws.com/',
    user: `${process.env.USER}`,
    password: `${process.env.PASSWORD}`,
    database: 'database-ihbo',
    port: process.env.PORT
})

con.connect( err => {
    if (err) {
        console.error(err);
    }
    console.log('Connected to RDS MySQL database!');
});

// const userLogin = (data, callback) => {
//     const queryString = "SELECT Username, Passwords FROM Users";
//     con.query(queryString, (err, data) => {
//         if (err) {
//             console.log(err, "Error getting userName and password in database");
//         };
//         callback(null, data);
//     });
// };

const userInfo = (data, callback) => {
    const queryString = `SELECT ${Users.Username}, ${Foods.Item}, ${EXP.Expiration_Date}
    FROM Users, EXP
    JOIN Foods 
    ON ${Foods.Item} = ${Foods.Item}
    WHERE ${Users.Username} = ${Users.Username}`;
    con.query(queryString, querString2, (err, data) => {
        if (err) {
            console.log(err, "Error getting userInfo in database");
        };
        callback(null, data);
    });
};

// const signUp = (data, callback) => {
//     const queryString = `INSERT INTO Users (Name, Username, Passwords, email) 
//     VALUE (${Users.Name}, ${Users.Username}, ${Users.Passwords}, ${Users.Email})`;
//     con.query(queryString, (err, data) => {
//         if (err) {
//             console.log(err, "Error getting signUp in database");
//         };
//         callback(null, data);
//     });
// };

// const existingUser = (data, callback) => {
//     const queryString = `SELECT ${Users.Name_}, ${Users.userName}, ${Users.password_}, ${Users.email} 
//     FROM Users`;
//     con.query(queryString, (err, data) => {
//         if (err) {
//             console.log(err, "Error getting existing User in database");
//         };
//         callback(null, data);
//     });
// };

// const newUserName = (data, callback) => {
//     const queryString = `INSERT INTO Users (Username) VALUE (${Users.Username})`;
//     con.query(queryString, (err, data) => {
//         if (err) {
//             console.log(err, "Error inserting new userName");
//         };
//     });
// };

// const addItem = (data, callback) => {
//     const queryString = `INSERT INTO Foods (Item) VALUE (${Foods.Item});
//       INSERT INTO EXP (expiration) VALUE (${EXP.expiration});`;
//     con.query(queryString, (err, data) => {
//         if (err) {
//             console.log(err, "Error adding new Item");
//         };
//     });
// };

module.exports = {con, userLogin, userInfo, signUp, existingUser, newUserName, addItem};