var express = require('express')

var router = express.Router()
var user = require('./api/users.route')

router.use('/user',user);


module.exports = router;