const User = require("../models/userSchema");
const { generateToken } = require("../utils/jwtUtils");
const { verifyToken } = require("../utils/jwtUtils");

const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    console.log("Registration request body:", req.body);

    const userExist = await User.findOne({ email });

    if (!userExist) {
      const user = new User({ email, password, username });
      await user.save();

      const token = generateToken(user);

      res.cookie("jwt", token, { httpOnly: true, maxAge: 2592000000 }); // 30 days
      res.status(201).json({ message: "User registered successfully" });
    } else {
      res.status(400).json({ message: "User already exists!" });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = generateToken(user);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 2592000000 });
    console.log("logged in succesfuly")
    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logout = (req, res) => {
  res.clearCookie("jwt");
  res.json({ message: "Logged out successfully" });
};

const checkLoginStatus = async (req, res) => {
  const token = req.cookies.jwt; // Retrieve the JWT from cookies

  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    const decoded = await verifyToken(token); // Verify the JWT

    const user = await User.findById(decoded.id); // Find the user by ID from token payload

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({
        message: "User is logged in",
        user: { email: user.email, username: user.username },
      });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { register, login, logout, checkLoginStatus };
