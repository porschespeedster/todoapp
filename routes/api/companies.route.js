var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var CompanyController = require('../../controllers/company.controller');


// Map each API to the Controller FUnctions



router.post('/create', CompanyController.createCompany)
router.get('/', CompanyController.getCompanies)


// Export the Router

module.exports = router;