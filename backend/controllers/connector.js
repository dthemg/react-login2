var mysql = require('mysql');
var mysqlConfig = require('../config/config');
var exports = {};

// SQL connection callback function
exports.dbConnection = function (callback) {
  console.log("Calling connector callback");
  var connection = mysql.createConnection(mysqlConfig);
  
  // TODO: Experiment with express-sessions:
  // https://github.com/chill117/express-mysql-session
  // If we create it here, will it persist? Will we
  // be able to see rows appearing in the database?
  
  connection.connect(function(err) {
    if (err) throw err;
    callback(err, connection);
  });
};

module.exports = exports;