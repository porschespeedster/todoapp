var express = require('express')

var router = express.Router()
var domain = require('./api/domains.route')

router.use('/domain',domain);


module.exports = router;