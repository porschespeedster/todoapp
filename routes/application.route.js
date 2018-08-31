var express = require('express')

var router = express.Router()
var application = require('./api/apps.route')

router.use('/app',application);


module.exports = router;