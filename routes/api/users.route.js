var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var LoginController = require('../../controllers/user.controller');


// Map each API to the Controller FUnctions


router.get('/get', LoginController.getUsers)
router.post('/', LoginController.createUser)
router.post('/login', LoginController.userLogin)


// Export the Router

module.exports = router;