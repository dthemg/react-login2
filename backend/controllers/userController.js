var sqlConnector = require("./connector");



exports.home = (req, res) => {
  res.send("Return data used for the home page");
}

exports.isLoggedIn = (req, res) => {
  var session = req.session;
  if (req.session.loggedIn) {
    res.send({
      loggedIn: true
    })
  } else {
    res.send({
      loggedIn: false
    })
  }
}

exports.login = (req, res) => {
  var message = "";
  var session = req.session;

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
        res.status(500).send({
          message: err.message || "login server error"
        });
      }
      conn.query(sqlQuery, [username, password], function(error, results) {
        if (results.length > 0) {
          req.session.loggedIn = true;
          req.session.userId = results[0].user_id;
          console.log("Login attempt successful");
          res.status(200).send({
            message: "User was logged in"
          });
        } else {
          res.status(404).send({
            message: "User not found"
          })
        }
      });
    });
  }
}

exports.profile = (req, res) => {
  if (!req.session.loggedIn) {
    res.send("User isn't logged in dumbo");
  }
  console.log(req.session.userId);
}