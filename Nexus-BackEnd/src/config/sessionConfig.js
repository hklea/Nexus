const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

const sessionConfig = session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE, // MongoDB connection string
    mongooseConnection: mongoose.connection,
  }),
  cookie: {

    secure: false,
  httpOnly: false,
    maxAge: 2592000000, // 30 days
  },
});

module.exports = sessionConfig;
