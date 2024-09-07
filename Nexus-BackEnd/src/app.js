require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const User = require('./models/userSchema');
const PORT = 3000;
require("./Database/conn"); 

const { generateToken, verifyToken } = require("./utils/jwtUtils");

app.use(cors({

   origin: "https://chiefsoft.onrender.com",  // Adjust origin based on your client

  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

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

// Google login route
app.get("/auth/google", (req, res) => {
  const redirectUri = encodeURIComponent("https://nexus-express.onrender.com/auth/google/callback");
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${redirectUri}&scope=profile email`;

  res.redirect(googleAuthUrl);
});

// Google callback route
app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;
  try {
    const tokenResponse = await axios.post(`https://oauth2.googleapis.com/token`, {
      code,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: "https://nexus-express.onrender.com/auth/google/callback",
      grant_type: 'authorization_code',
    });

    const { access_token } = tokenResponse.data;
    const userInfoResponse = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`);

    const { id, email, name, picture } = userInfoResponse.data;

    let user = await User.findOne({ email });

    if (user) {
      user.googleId = user.googleId || id;
      user.displayName = user.displayName || name;
      user.image = user.image || picture;
      await user.save();
    } else {
      user = new User({
        googleId: id,
        displayName: name,
        email,
        image: picture,
      });
      await user.save();
    }

    // Generate a JWT token
    const token = generateToken(user);

    // Set the token as a cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true, // Use HTTPS in production
      sameSite: "none",
      maxAge: 2592000000, // 30 days
    });

    res.redirect("https://chiefsoft.onrender.com/"); // Redirect to React dashboard on success
  } catch (error) {
    console.error("Error during Google authentication", error);
    res.redirect("https://chiefsoft.onrender.com/login"); // Redirect to login on failure
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
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
