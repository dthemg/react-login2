var express = require('express');
var user = require('../controllers/userController')
var router = express.Router();

router.get("/", user.home);
router.post("/login", user.login);
router.get("/profile", user.profile);

module.exports = router;