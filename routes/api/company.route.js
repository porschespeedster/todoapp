var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var CompanyController = require('../../controllers/company.controller');


// Map each API to the Controller FUnctions



router.post('/create', LoginController.createCompany)


// Export the Router

module.exports = router;