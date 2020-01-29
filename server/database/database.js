const mysql = require('mysql');


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Ingredients'
})

con.connect(function (err) {
    if (err) {
        return;
    }
});



//addNewUser will store the new profiles from the signUp component
const addNewUser = (newUser, callback) => {
    let queryString =  `INSERT into Users (name, userName, password, email) VALUES 
    ('${newUser.name}','${newUser.userName}', '${newUser.password}', '${newUser.email}');`

    con.query(queryString, (err, data) => {
        if(err) {
           return;
        }
        callback(null, data);
    })
};

//accessUser will retrieve both the Username and the Password from the User Table
const accessUser = (profile, callback) => {
    let queryString = `SELECT * FROM Users;`
    con.query(queryString, (err, data) => {
        if(err) {
            return;
        }
        callback(null, data);
    })
}


//removeUser deletes 
const removeUser = (deleteProfile, callback) => {
    let queryString = `DELETE FROM Users WHERE UsersID=${deleteProfile.UserID};`

    con.query(queryString, (err, data) => {
        if(err) {
            return;
        }
        callback(null, data);
    })
};


//addFoodToPantry will add an item to the pantry along with the food's expiration date

//needs to access user
const addFoodToPantry = (newItem, callback) => {
      let queryString = `INSERT into Foods (item_name, expiration, UserID) VALUES ("${newItem.item_name}", "${newItem.expiration}", "${newItem.UserID}");`
      
      
    con.query(queryString, (err, data) => {
        if(err) {
            return;
            
        }
        callback(null, data);
    })
};


//userData will show an existing user's info and pantry items
const userData = (info, callback) => {
    let queryString = `SELECT * FROM Foods WHERE (${info}=UserID);`

    con.query(queryString, (err, data) => {
        if(err) {
            return;
        }
        callback(null, data);
    })
};


const removePantryItem = (removeItem, callback) => {
    let queryString = `DELETE FROM Foods WHERE FoodsID=${removeItem};`;

    con.query(queryString, (err, data) => {
        if(err) {
            return;
        }
        callback(null, data);
    })
};


module.exports = {con, addNewUser, accessUser, removeUser, addFoodToPantry, userData, removePantryItem};

