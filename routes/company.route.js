var express = require('express')

var router = express.Router()
var company = require('./api/companies.route')

router.use('/company',company);


module.exports = router;