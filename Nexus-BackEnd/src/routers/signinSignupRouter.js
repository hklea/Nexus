const express = require('express');
const router = express.Router();
const { register, login, logout, checkLoginStatus } = require('../controllers/signinSignupController');

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Logout route
router.post('/logout', logout);

router.get('/status', checkLoginStatus)

module.exports = router;
