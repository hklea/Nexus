const express = require('express');
const app = express();

// Middleware setup
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, JavaScript al with Express!');
});

// Export the app for use in server.js
module.exports = app;
