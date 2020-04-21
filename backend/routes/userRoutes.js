var express = require('express');
var user = require('../controllers/userController')
var router = express.Router();


router.get("/", user.home);

module.exports = router;