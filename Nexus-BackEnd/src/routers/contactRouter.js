// routers/authRouter.js
const express = require('express');
const router = express.Router();
const {sendMessage, toggleSubscribe} = require('../controllers/contactController')

router.post('/contact', sendMessage)

router.put('/toggle-subscribe', toggleSubscribe);




module.exports = router;
