const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/login', userController.login);

// Add more user-related routes as needed

module.exports = router;