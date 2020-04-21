var express = require('express');
var session = require('express-session');
var http = require('http');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var mysqlConfig = require('./config/config');
var routes = require('./routes/user');
var user = require('./routes/user');


var app = express()
// Create connection
var connection = mysql.createConnection(mysqlConfig);
connection.connect();
global.db = connection;

// Session setup
app.use(session({
  secret: 'davids secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

// Environments
app.set('port', process.env.PORT || 9000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log("Listening on port 9000");
app.listen(9000);