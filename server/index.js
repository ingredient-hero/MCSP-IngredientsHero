const dotenv = require('dotenv').config({path: ('../.env')});
const express = require('express');
const app = express();
const db = require('./database/database.js');
const bodyParser = require('body-parser');
const path = require('path');



app.use(bodyParser.json());
//app.use(express.static('../client/public'));

// app.get('../client/public', function(req,res) {
//   res.send();
// })

app.use('/', express.static(path.resolve('../client/public')));

// app.get("/", function(req,res) {
//   res.sendFile(__dirname + '../client/public/index.html')
// });


// app.use( '../client/public', (res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/mylogin', (req, res) => {
  console.log(req.body) //This should be an object with the username and password
  db.userLogin((err, data) => {
    if(err) {
      console.log(err, "Error getting Login from Server");
      res.end();
    } else {
      db.userInfo((err, data) => {
        if (err) {
          console.log(err, "Error getting User Info from Server");
          res.end();
        }
        res.send(userInfo);
      });
    }; 
  });
  
  /* A function will need to be built in the database that will use a query string 
  that gains all of the user information that matches the username and password.

  Upon receiving this information back from the database, the server will send the
  user information back to the client in an array of objects that will be sent to 
  the pantry page for use. */
});

app.post('/mysignup', (req, res) => {
  console.log(req.body) //This should be an object with a name, email, username, and password
  db.signUp((err, data) => {
    if (err) {
      console.log(err, "Error getting sign up info from Server");
      res.end();
    };
    res.send(signUp);
  });
  
  /* A function will need to be built in the database that will use a query string 
  to create a new user with the information from the req.body. The server doesn't
  need to send back any information, except for maybe a success message. */

});

app.post('/addingtopantry', (req, res) => {
  console.log(req.body) //This should have the user id, item, and expiration date
  
  /* Given the information from req.body, a function will need to be built in the 
  database that will use a query string to add the item and expiration date to the 
  users id. The server should only send a success message back to the client, but
  the item should reflect on the page for the user. */
});



app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;
