var sqlConnector = require("./connector");

exports.home = (req, res) => {
  res.send("Return data used for the home page");
}

exports.login = (req, res) => {
  var message = "";
  var session = req.session;

  console.log(req.body);

  // TODO: Keep working here, currently requests are empty for some reason...
  if (!req.body) {
    res.status(400).send({
      message: "POST content empty"
    });
    return;
  }

  if (req.method == 'POST') {
    var post = req.body;

    var username = post.username;
    var password = post.password;

    var sqlQuery = "SELECT user_id, username, password FROM users WHERE username = ? AND password = ?"
    console.log("Attempting login");
    sqlConnector.dbConnection(function(err, conn) {
      if (err) { 
        console.log(err); 
        return;
      } else {
        conn.query(sqlQuery, [username, password], function(error, results) {
          if (results.length > 0) {
            req.session.userId = results[0].user_id;
            req.session.username = results[0].username;
            console.log("Login attempt successful for user:");
            console.log(req.session.userId);
            console.log(req.session.username);
          } else {
            console.log("Login attempt failed");
          }
        });
      }
    });
  }
}
