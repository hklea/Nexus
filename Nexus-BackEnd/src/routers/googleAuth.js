const express = require('express');
const router = express.Router();
const {
    googleAuth,
    googleAuthCallback,
    loginSuccess,
    logout,} = require('../controllers/googleAuthController');

// Initiate Google OAuth login
router.get('/google',   googleAuth);

// Google OAuth callback
router.get('/google/callback', googleAuthCallback);

// Success route
router.get('/login/success', loginSuccess);

// Logout route
router.get('/logout',logout);



module.exports = router;
