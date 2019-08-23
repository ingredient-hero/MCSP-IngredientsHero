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


//addNewUser will store the new profiles from the signUp component
const addNewUser = (newUser, callback) => {
    let queryString =  `INSERT into USER (Name, Username, Password, Email) VALUES 
    ('${newUser.name}','${newUser.userName}', '${newUser.password}', '${newUser.email}')`

    con.query(queryString, (err, data) => {
        if(err) {
            console.log('>>> could not add user', err);
        }
        callback(null, data);
    })
};
//addFoodToPantry will 
const addFoodToPantry = (newItem, call) => {
    let queryString = `INSERT into Foods ('${newItem.item_name})`

    con.query(queryString, (err, data) => {
        if(err) {
            console.log('>>> could not add food to pantry', err);
        }
        callback(null, data);
    })
};

module.exports = {con, addNewUser,addFoodToPantry }


// const userLogin = (data, callback) => {
//     const queryString = `SELECT ${data.Username}, ${data.Password} FROM Users`;
//     con.query(queryString, (err, data) => {
//         if (err) {
//             console.log(err, "Error getting Username and Password in database");
//         };
//         callback(null, data);
//     });
// };

// const userInfo = (data, callback) => {
//     const queryString = `SELECT ${Users.Username}, ${Foods.Item}, ${EXP.Expiration_Date}
//     FROM Users, EXP
//     JOIN Foods 
//     ON ${Foods.Item} = ${Foods.Item}
//     WHERE ${Users.Username} = ${Users.Username}`;
//     con.query(queryString, querString2, (err, data) => {
//         if (err) {
//             console.log(err, "Error getting userInfo in database");
//         };
//         callback(null, data);
//     });
// };

// const signUp = (data, callback) => {
//     const queryString = `INSERT INTO Users (${Users.Name}, ${Users.Username}, ${Users.Password}, ${Users.Email}) 
//     VALUE (${Users.Name}, ${Users.Username}, ${Users.Password}, ${Users.Email})`;
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
//     const queryString = `INSERT INTO Users (${Users.Username}) VALUE (${Users.Username})`;
//     con.query(queryString, (err, data) => {
//         if (err) {
//             console.log(err, "Error inserting new Username in database");
//         };
//     });
// };

// const addItem = (data, callback) => {
//     const queryString = `INSERT INTO Foods (${Foods.Item}) VALUE (${Foods.Item});
//       INSERT INTO EXP (${EXP.expiration}) VALUE (${EXP.expiration});`;
//     con.query(queryString, (err, data) => {
//         if (err) {
//             console.log(err, "Error adding new Item in database");
//         };
//     });
// };

// const removeItem = (data, callback) => {
//     const queryString = `DELETE FROM ${Foods.Item} WHERE ${Foods.Item} = ${Foods.Item}`;
//     con.query(queryString, (err, data) => {
//         if (err) {
//             console.log(err, "Error removing Item in database")
//         };
//     });
// };






//module.exports = {con, userLogin};