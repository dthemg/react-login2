var express = require('express');
var session = require('express-session');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var debug = require('debug')('sql-api:server');
var routes = require('./routes/userRoutes');

var app = express()

// Define routes
app.use("/", routes);

// Session setup
app.use(session({
  secret: 'davids secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 } // Session timeout???
}));

// Environments
var port = process.env.PORT || '9000';
app.set('port', port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var server = http.createServer(app);
server.on('listening', onListening);
server.on('error', onError);
server.listen(port);
console.log("Listening on port 9000");


// HTTP listener for "listen" events
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

// HTTP listener for "error" events
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}