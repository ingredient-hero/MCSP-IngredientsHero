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
});

const userLogin = (data, callback) => {
    const queryString = `SELECT ${Users.Username}, ${Users.Password} FROM Users`;
    con.query(queryString, (err, data) => {
        if (err) {
            console.log(err, "Error getting Username and Password in database");
        };
        callback(null, data);
    });
};

const userInfo = (data, callback) => {
    const queryString = `SELECT ${data.Username}, ${data.Item}, ${data.Expiration_Date}
    FROM Users, EXP
    JOIN Foods 
    ON ${data.Item} = ${data.Item}
    WHERE ${data.Username} = ${data.Username}`;
    con.query(queryString, (err, data) => {
        if (err) {
            console.log(err, "Error getting userInfo in database");
        };
        callback(null, data);
    });
};

const signUp = (data, callback) => {
    const queryString = `INSERT INTO Users (${data.ID}, ${data.Name}, ${data.Username}, ${data.Password}, ${data.Email}) 
    VALUE (${data.ID}, ${data.Name}, ${data.Username}, ${data.Password}, ${data.Email})`;
    con.query(queryString, (err, data) => {
        if (err) {
            console.log(err, "Error getting signUp in database");
        };
        callback(null, data);
    });
};

const existingUser = (data, callback) => {
    const queryString = `SELECT ${data.Name_}, ${data.userName}, ${data.password_}, ${data.email} 
    FROM Users`;
    con.query(queryString, (err, data) => {
        if (err) {
            console.log(err, "Error getting existing User in database");
        };
        callback(null, data);
    });
};

const newUserName = (data, callback) => {
    const queryString = `INSERT INTO Users (${data.Username}) VALUE (${data.Username})`;
    con.query(queryString, (err, data) => {
        if (err) {
            console.log(err, "Error inserting new Username in database");
        };
        callback(null, data);
    });
};

const addItem = (data, callback) => {
    const queryString = `INSERT INTO Foods (${data.Item}) VALUE (${data.Item})`;
      `INSERT INTO EXP (${data.expiration}) VALUE (${data.expiration});`;
    con.query(queryString, (err, data) => {
        if (err) {
            console.log(err, "Error adding new Item in database");
        };
        callback(null, data);
    });
};

const removeItem = (data, callback) => {
    const queryString = `DELETE FROM ${data.Item} WHERE ${data.Item} = ${data.Item}`;
    con.query(queryString, (err, data) => {
        if (err) {
            console.log(err, "Error removing Item in database")
        };
        callback(null, data);
    });
};

module.exports = {con, userLogin, userInfo, signUp, existingUser, newUserName, addItem, removeItem};