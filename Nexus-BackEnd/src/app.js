require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./Database/conn"); // Ensure this file connects to your database
const cookieParser = require('cookie-parser'); // For handling cookies
const jwt = require('jsonwebtoken');
const { verifyToken } = require("./utils/jwtUtils"); 
const PORT = 3000;
const User = require('./models/userSchema');

app.use(cors({
  origin: "http://localhost:5173", // Adjust origin based on your client
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser()); // Add this middleware to parse cookies

// Middleware to verify JWT from cookies
app.use((req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    try {
      const user = verifyToken(token);
      req.user = user; // Attach user info to req
    } catch (error) {
      console.error("Invalid token", error);
    }
  }
  next();
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users); // Send the users as a JSON response
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Example protected route
app.get("/protected", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.status(200).json({ message: "Authenticated user", user: req.user });
});

const indexRouter = require("./routers/indexRouter");
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server started at port no ${PORT}`);
});
