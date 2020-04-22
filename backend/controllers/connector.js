var mysql = require('mysql');
var mysqlConfig = require('../config/config');
var exports = {};

// SQL connection callback function
exports.dbConnection = function (callback) {
  console.log("Calling connector callback");
  var connection = mysql.createConnection(mysqlConfig);
  connection.connect(function(err) {
    callback(err, connection);
  });
};

module.exports = exports;