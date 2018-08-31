var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var DomainController = require('../../controllers/domain.controller');


// Map each API to the Controller FUnctions


router.get('/get', DomainController.getDomains)
router.get('/get/:id', DomainController.getCompanyDomain)
router.post('/create', DomainController.createDomain)



// Export the Router

module.exports = router;