const dotenv = require('dotenv').config({path: ('../.env')});
const express = require('express');
const app = express();
const db = require('./database/database.js');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');
app.use(cors());


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/', express.static(path.resolve('../client/public')));

app.get('/mylogin', (req, res) => {
  let profile = req.query
  let infos = [];
  let userInfo = {};
  db.accessUser(profile, (err, data) => {
    if (err) {
      res.end();
    }
    data.map( user => {
      
      if (user.userName == profile.userName) {
        infos.push(user);
        userInfo['myuser'] = user;
      }
    })
    //call the db function that pulls info from the user
    //now that data has grabbed the id, after passing info into the userData function on the db, 
    //you should have access to the user and their food items/expiration
    db.userData(userInfo.myuser.UserID, (err, info) => {
      if (err) {
        res.end();
      }
      infos.push(info)
      res.send(infos)
    })
  });
});


app.post('/mysignup', (req, res) => {
  let newUser = req.body
  db.addNewUser(newUser, (err, data) => {
    if (err) {
      res.end();
    }
    res.send(data);
  })
});

app.post('/addingtopantry', (req, res) => {
    let pantryItem = req.body
    db.addFoodToPantry(pantryItem, (err, data) => {
      if(err) {
        res.end();
      }
      res.send(data)
    }) 
});

app.delete('/removefrompantry', (req, res) => {
  const trash = req.body.id;
  db.removePantryItem(trash, (err, data) => {
      if (err) {
          res.end();
      }
  });
});




app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;
