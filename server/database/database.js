const mysql = require('mysql');
//const http = require('http');

// const con = mysql.createConnection({
//     host: 'database-ihbo.crmajtggct83.us-east-2.rds.amazonaws.com',
//     user: `${process.env.DB_USER}`,
//     password: `${process.env.DB_PASSWORD}`,
//     port: 3306
// })

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Ingredients'
})

con.connect(function (err) {
    if (err) {
        //delete console log if functions correctly
        //console.error(err);
        return;
    }
   // console.log('Connected to RDS MySQL database!');
});



//addNewUser will store the new profiles from the signUp component
const addNewUser = (newUser, callback) => {
    let queryString =  `INSERT into USER (name, username, password, email) VALUES 
    ('${newUser.name}','${newUser.userName}', '${newUser.password}', '${newUser.email}')`

    con.query(queryString, (err, data) => {
        if(err) {
            //delete console log if functions correctly
           // console.log('>>> could not add user', err);
        }
        callback(null, data);
    })
};

//accessUser will retrieve both the Username and the Password from the User Table
const accessUser = (profile, callback) => {
    let queryString = `SELECT (UserID) 
    FROM Users WHERE username=${profile.userName}, password=${profile.password}'}`

    con.query(queryString, (err, data) => {
        if(err) {
            //delete console log if functions correctly
            //console.log('>>> could not find user', err);
        }
        callback(null, data);
    })
}

//removeUser deletes 
const removeUser = (deleteProfile, callback) => {
    let queryString = `DELETE FROM Users WHERE UsersID=${deleteProfile.UserID}`

    con.query(queryString, (err, data) => {
        if(err) {
            //delete console log if functions correctly
           // console.log('>>> could not delete profile from Users')
        }
        callback(null, data);
    })
};


//addFoodToPantry will add an item to the pantry along with the food's expiration date

//needs to access user
const addFoodToPantry = (newItem, callback) => {
      /*INSERT into Foods (item_name, expiration)
      select food_item, expiration from foods where UserID 
      IN (select userID from USERs where username=${newItem.name})*/
    let queryString = `INSERT into Foods (item_name, expiration) VALUES (${newItem.item_name}, ${newItem.expiration})
  
    SELECT ${newItem.item_name}, ${newItem.expiration} FROM Foods
    WHERE UserID IN (SELECT UserId FROM Users WHERE username=${newItem.name})`

    con.query(queryString, (err, data) => {
        if(err) {
            //delete console log if functions correctly
            //console.log('>>> could not add food to pantry', err);
        }
        callback(null, data);
    })
};


//userData will show an existing user's info and pantry items
const userData = (info, callback) => {
    let queryString = `SELECT * FROM Foods WHERE UserID=${info}`
    //possibility you may to access through UserID=${info.id}

//select food.item, expiration from foods where UserID IN (select userID from USERs where username=${info.name})
    con.query(queryString, (err, data) => {
        if(err) {
            //delete console log if functions correctly
           // console.log(`>>> could not the user's info`, err)
        }
        callback(null, data);
    })
};

//needs to pull from the users table, query from the foods table, with that user id
//on the client side, 


//removePantryItem will remove the item posted in your inventory
const removePantryItem = (removeItem, callback) => {
    let queryString = `DELETE FROM Foods WHERE FoodsID=${removeItem}`;

    con.query(queryString, (err, data) => {
        if(err) {
            //delete console log if functions correctly
            //console.log('>>> could not delete the food item', err)
        }
        callback(null, data);
    })
};



/*create a foods table that has an expiration date that has FOREIGN KEY that points to different users.

A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.

The table containing the FOREIGN KEY is called the child table, and the table containing 
the candidate key is called the referenced or parent table.

A FOREIGN KEY with cascade delete means that if a record in the parent table is deleted, 
then the corresponding records in the child table will automatically be deleted.
*/

module.exports = {con, addNewUser, accessUser, removeUser, addFoodToPantry, userData, removePantryItem,}

