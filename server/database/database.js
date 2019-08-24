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

//accessUser will retrieve both the Username and the Password from the User Table
const accessUser = (profile, callback) => {
    let queryString = `SELECT (Username, Password) 
    FROM Users WHERE Username=${profile.userName}, Password=${profile.password}'}`

    con.query(queryString, (err, data) => {
        if(err) {
            console.log('>>> could not find user', err);
        }
        callback(null, data);
    })
}

//removeUser deletes 
const removeUser = (deleteProfile, callback) => {
    let queryString = `DELETE FROM Users WHERE UsersID=${deleteProfile}`

    con.query(queryString, (err, data) => {
        if(err) {
            console.log('>>> could not delete profile from Users')
        }
        callback(null, data);
    })
};


//addFoodToPantry will add an item to the pantry

//needs to access user
const addFoodToPantry = (newItem, callback) => {
    let queryString = `INSERT into Foods ('${newItem.item_name})`

    con.query(queryString, (err, data) => {
        if(err) {
            console.log('>>> could not add food to pantry', err);
        }
        callback(null, data);
    })
};

//addExpirationDate will add an expiration date to a food item

//needs to access user
const addExpirationDate = (newDate, callback) => {
    let queryString = `INSERT into EXP ('${newDate.expiration}')`

    con.query(queryString, (err, data) => {
        if(err) {
            console.log('>>> could not add expiration to food item', err);
        }
        callback(null, data);
    })
};


//userData will show an existing user's info and pantry items
const userData = (info, callback) => {
    let queryString = `SELECT (Users.Name=${info.name}, Foods.Item=${info.item_name}, EXP.Expiration_Date=${info.expiration}) 
    FROM Users, Foods, EXP`

    con.query(queryString, (err, data) => {
        if(err) {
            console.log(`>>> could not the user's info`, err)
        }
        callback(null, data);
    })
};




//removePantryItem will remove the item posted in your inventory
const removePantryItem = (removeItem, callback) => {
    let queryString = `DELETE FROM Foods WHERE FoodsID=${removeItem}`;

    con.query(queryString, (err, data) => {
        if(err) {
            console.log('>>> could not delete the food item', err)
        }
        callback(null, data);
    })
};





module.exports = {con, addNewUser, accessUser, removeUser, addFoodToPantry, addExpirationDate, userData, removePantryItem,}


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
//     con.query(queryString, , (err, data) => {
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