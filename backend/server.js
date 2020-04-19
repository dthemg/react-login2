var express = require('express');
var mysql = require('mysql');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var mysqlConfig = require('../config/config');

var app = express();
var connection = mysql.createConnection(mysqlConfig);
var sessionStore = new MySQLStore({}, connection);

// Middlewares
app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false // What does this do?
}))

module.exports = app;
