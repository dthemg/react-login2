var express = require('express');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var dbConfig = require('./config/config');

var app = express();
var sessionStore = new MySQLStore(dbConfig);

// Middlewares
app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}))

module.exports = app;
