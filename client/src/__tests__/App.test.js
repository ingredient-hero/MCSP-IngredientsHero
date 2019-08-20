import React from 'react';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
import App from '../App';
import Welcome from '../web_pages/welcome.jsx';
import Pantry from '../web_pages/pantry.jsx';
//var pass = require('../../sensitive.js');

var expect = require('chai').expect;
var mysql = require('mysql');
var request = require('request');
var httpMocks = require('node-mocks-http');
var port = 9000;

jest.mock('react-dom');


//PAGE RENDER
afterEach(cleanup);

describe('Loading HomePage', () => {
    it('renders without crashing', () => {
       shallow(<Welcome />);
     });
 });

//tests written for sign up button, and sign up modal, Pantry
    it("Expects to find button HTML element with className test in the DOM", () => {
        const wrapper = shallow(<Welcome className="Sign-Up" text="test"/>)
        expect(wrapper.find('button.Sign-Up'));
    });
 
       it("Expects to find button HTML element with className test in the DOM", () => {
        const wrapper = shallow(<Welcome className="Login" text="test"/>)
        expect(wrapper.find('button.Login'));
    });


    it("Expects to find button HTML element with className test in the DOM", () => {
        const wrapper = shallow(<Pantry className="Login" text="test"/>)
        expect(wrapper.find('button.Pantry'));
    });


 
        describe('Account Login:', function() {
            
            beforeEach(function(done) {
                var options = {
                    'method': 'POST',
                    'uri': 'http://127.0.0.1:9000/mysignup',
            'json': {
              'username': 'Collin',
              'password': 'Collin'
            }
          };
          
          request(options, function(error, res, body) {
              done(error);
          });
        });
    
        it('Logs in existing users', function(done) {
            var options = {
            'method': 'POST',
            'uri': 'http://127.0.0.1:9000/login',
            'json': {
              'username': 'Collin',
              'password': 'Collin'
            }
          };
          
          request(options, function(error, res, body) {
            if (error) { return done(error); }
            expect(res.headers.location).to.equal('/');
            done();
          });
        });
        
        it('Users that do not exist are kept on login page', function(done) {
            var options = {
                'method': 'POST',
                'uri': 'http://127.0.0.1:9000/login',
            'json': {
                'username': 'Collin',
              'password': 'Collin'
            }
          };
    
          request(options, function(error, res, body) {
              if (error) { return done(error); }
            expect(res.headers.location).to.equal('/login');
            done();
        });
    });
    
    it('Users that enter an incorrect password are kept on login page', function(done) {
        var options = {
            'method': 'POST',
            'uri': 'http://127.0.0.1:9000/login',
            'json': {
                'username': 'Collin',
              'password': 'Collin'
            }
          };
          
          request(options, function(error, res, body) {
              if (error) { return done(error); }
              expect(res.headers.location).to.equal('/login');
              done();
            });
        });
    });
      
//DATABASE

describe('', function() {

    var db;
    var server;
    
    var clearDB = function(connection, tablenames, done) {
        var count = 0;
        tablenames.forEach(function(tablename) {
            connection.query('DROP TABLE IF EXISTS ' + tablename, function() {
                count++;
                if (count === tablenames.length) {
                    return schema(db).then(done);
                }
            });
        });
    };
    
    beforeEach(function(done) { 
        

        
        beforeEach(function(done) {
            
  
            const con = mysql.createConnection({
                host: 'http://database-ihbo.crmajtggct83.us-east-2.rds.amazonaws.com/',
                user: `${process.env.USER}`,
                password: `${process.env.PASSWORD}`,
                database: 'database-ihbo',
                port: process.env.PORT
            })

        
            var tablenames = ['Users', 'Foods', 'EXP'];

            db.connect(function(err) {
                if (err) { return done(err); }
            /* Empties the db table before each test so that multiple tests
            * (or repeated runs of the tests) won't screw each other up: */
            clearDB(db, tablenames, function() {
                server = app.listen(port, done);
                });
            });

            afterEach(function() { server.close(); });
        })

    }

)}
)