var express = require('express');
var user = require('../controllers/userController')
var router = express.Router();

router.get("/", user.home);
router.post("/login", user.login);
router.get("/profile", user.profile);
router.get("/isLoggedIn", user.isLoggedIn);
router.post("/signup", user.signUp)

router.get("/session", (req, res) => {
  console.log(req.sessionID)
  res.send(req.sessionID);
})

module.exports = router;