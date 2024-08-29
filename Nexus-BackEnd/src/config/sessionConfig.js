// config/sessionConfig.js
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables




const sessionConfig = session({
  
  secret: process.env.SESSION_SECRET || '12345678', // Replace with your own secret key
  resave: false, // Set to false to avoid resaving sessions if they are not modified
  saveUninitialized: false, // Set to false to avoid creating sessions for unauthenticated users
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE, // MongoDB connection string
    mongooseConnection: mongoose.connection,
  }),
  cookie: {
    secure: process.env.NODE_ENV === 'false', 
    maxAge: 1000 * 60 * 60 * 24 * 30
  },
});


module.exports = sessionConfig;
