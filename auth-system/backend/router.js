// Import Express.
const express = require('express');

// Import controller.
const controller = require('./controller');

// Create a new instance of a router and route the different routes to the functions inside the controller.
const router = express.Router();
router.get('/test', controller.test);
router.post('/login', controller.loginUser);
router.post('/register', controller.registerUser);

// Export the router.
module.exports = router;
