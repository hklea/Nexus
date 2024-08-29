// routers/authRouter.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { register, login, logout, status } = require('../controllers/signinSignupController');


// Register route
router.post('/register', register);

// Login route
router.post('/login', passport.authenticate('local'), login);

// Logout route
router.post('/logout', logout);

// Status route
router.get('/status',  status);

module.exports = router;
