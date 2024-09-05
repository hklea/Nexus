// config/sessionConfig.js
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const sessionConfig = session({
  // Replace with your own secret key
  resave: false, // Set to false to avoid resaving sessions if they are not modified
  // Set to false to avoid creating sessions for unauthenticated users
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE, // MongoDB connection string
    mongooseConnection: mongoose.connection,
  }),
  cookie: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 30,
  },

  saveUninitialized: true,
  secret: process.env.RDS_COOKIE_SECRET,
  store: testEnvironment ? null : new require("connect-pg-simple")(session)(),
});

module.exports = sessionConfig;
