// routers/authRouter.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { register, login, logout, status } = require('../controllers/signinSignupController');


// Register route
router.post('/register', register);


router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.status(401).json({ message: 'Authentication failed' });
  
      req.logIn(user, (err) => {
        if (err) return next(err);
        res.status(200).json({ message: 'Logged in successfully', user });
      });
    })(req, res, next);
  });
// Logout route
router.post('/logout', logout);

// Status route
router.get('/status',  status);

module.exports = router;
