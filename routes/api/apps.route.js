var express = require('express')

var router = express.Router()


var ApplicationController = require('../../controllers/application.controller');


router.get('/get', ApplicationController.getApplications)
router.get('/get/:domain', ApplicationController.getApplicationByDomain)
router.post('/create', ApplicationController.createApplication)

module.exports = router;