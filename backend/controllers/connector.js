var mysql = require('mysql');
var mysqlConfig = require('../config/config');
var exports = {};

// SQL connection callback function
exports.dbConnection = function (callback) {
  console.log("Creating a new database connection");
  var connection = mysql.createConnection(mysqlConfig);
  connection.connect(function(err) {
    callback(err, db);
  });
};

module.exports = exports;