const express = require('express');
const router = express.Router();
const authRouter = require('./googleAuth');
const manualSignInSignUp = require('./signinSignupRouter')
const contacts = require('./contactRouter')

// Use the authRouter for routes starting with /auth
router.use('/auth', authRouter);
router.use('/', manualSignInSignUp);
router.use('/', contacts);





module.exports = router;
