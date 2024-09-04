// controllers/authController.js
const User = require("../models/userSchema");
const { loginSuccess } = require("./googleAuthController");

const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const userexist = await User.findOne({ email }); // Await the query result

    if (!userexist) {
      const user = new User({ email, password, username });
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    } else {
      res.status(400).json({ message: "User already exists!!!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = (req, res) => {
  console.log('Session ID log: ', req.sessionID);
  console.log('Session log: ', req.session);
  console.log("Cookie: ", req.cookies);
  res.status(200).json({ message: "Logged in successfully" });
};

const logout = (req, res) => {
  req.logout();
  res.json({ message: "Logged out successfully" });
};

const status = (req, res) => {
  console.log(req.body)
  console.log("User: ",req.user)
  console.log('Session ID:', req.sessionID);
  console.log('Session:', req.session);
  console.log("Cookie: ", req.cookies);
  if (req.isAuthenticated()) {
    console.log(req.user.googleId ? "Logged in with Google" : "Logged in manually");
    res.json({ message: "User is authenticated", user: req.user });
  } else {
    res.json({ message: "User is not authenticated" });
  }
};


module.exports = { register, login, logout, status };
