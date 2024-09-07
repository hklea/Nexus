const express = require('express');
const router = express.Router();
const {
    googleAuth,
    googleAuthCallback,
   } = require('../controllers/googleAuthController');

// Initiate Google OAuth login
router.get('/google',   googleAuth);

// Google OAuth callback
router.get('/google/callback', googleAuthCallback);





module.exports = router;
