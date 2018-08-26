var express = require('express')

var router = express.Router()
var company = require('./api/company.route')

router.use('/',company);


module.exports = router;