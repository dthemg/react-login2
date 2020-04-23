var express = require('express');
var user = require('../controllers/userController')
var router = express.Router();

router.get("/", user.home);
router.post("/login", user.login);
router.get("/profile", user.profile);
router.get("/isLoggedIn", user.isLoggedIn);

module.exports = router;