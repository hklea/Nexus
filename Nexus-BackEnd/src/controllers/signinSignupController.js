const User = require("../models/userSchema");
const { generateToken, verifyToken } = require("../utils/jwtUtils");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password, username } = req.body;
  console.log("Registration request body:", req.body);
  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      const user = new User({ email, password, username });
      await user.save();
      return res.status(201).json({ message: "User registered successfully" });
    } else {
      if (userExist.googleId) {
        if (userExist.password) {
          return res.status(400).json({ message: "User already exists!!!" });
        }
        userExist.password = password;
        userExist.username = username;
        await userExist.save();
        return res.status(201).json({ message: "User updated successfully" });
      } else {
        return res.status(400).json({ message: "User already exists!" });
      }
    }
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("login request body:", req.body);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the plain password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true, // Ensure this is set to true in production
      sameSite: "none",
      maxAge: 2592000000, // 30 days
    });
    console.log("Logged in successfullyyy");
    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ message: "Could not log out" });
    }

    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(200).json({ message: "Logged out successfully" });
  });
};

const checkLoginStatus = async (req, res) => {
  console.log("Cookies request:", req.cookies);

  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    const decoded = await verifyToken(token); // Verify the JWT
    const user = await User.findById(decoded.id); // Find the user by ID from token payload

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // If username is empty, set it to the first word of displayName
    let username = user.username;
    if (!username && user.displayName) {
      username = user.displayName.split(" ")[0]; // Take the first word of displayName
    }

    res.status(200).json({
      message: "User is logged in",
      user: {
        email: user.email,
        username: username,
        subscribe: user.subscribe,
      },
    });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { register, login, logout, checkLoginStatus };
