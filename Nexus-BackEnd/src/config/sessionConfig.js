// config/sessionConfig.js
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const sessionConfig = session({
  // Replace with your own secret key
  secret: "23456789",
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE, // MongoDB connection string
    mongooseConnection: mongoose.connection,
  }),
 resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 2592000000, // 30 days
    secure: process.env.NODE_ENV === "production", // true if HTTPS, false otherwise
    httpOnly: true,
    sameSite: "None", // "None" for cross-origin requests
  },
});

module.exports = sessionConfig;
