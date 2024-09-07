require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./Database/conn"); // Ensure this file connects to your database
const cookieParser = require("cookie-parser"); // For handling cookies
const jwt = require("jsonwebtoken");
const axios = require("axios"); // For making HTTP requests
const { verifyToken, generateToken } = require("./utils/jwtUtils");
const PORT = 3000;
const User = require("./models/userSchema");
const session = require("express-session");
const helmet = require("helmet");

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", "https://nexus-express.onrender.com"],
      scriptSrc: ["'self'", "https://accounts.google.com"],
      connectSrc: ["'self'"],
      imgSrc: ["'self'", "data:"],
    },
  })
);

app.use(
  cors({
    origin: "https://chiefsoft.onrender.com", // Adjust origin based on your client
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "YOUR_SECRET_KEY",
    resave: false,
    saveUninitialized: true,
  })
);

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
  const redirectUri = "https://nexus-express.onrender.com/auth/google/callback";
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${redirectUri}&scope=profile email&access_type=offline`;
  res.redirect(googleAuthUrl);
});


// Google callback route
app.get("/auth/google/callback", async (req, res) => {
  const code = req.query.code;
  
  if (!code) {
    return res.redirect("https://chiefsoft.onrender.com/login"); // Adjust to your local login route
  }

  try {
    // Exchange code for access token
    const { data } = await axios.post(`https://oauth2.googleapis.com/token`, {
      code,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: "https://nexus-express.onrender.com/auth/google/callback", // Ensure this matches
      grant_type: "authorization_code",
    });

    const { access_token } = data;

    // Get user profile information from Google
    const { data: profile } = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`
    );

    let user = await User.findOne({ email: profile.email });
console.log(user)
    if (user) {
      user.googleId = user.googleId || profile.id;
      user.displayName = user.displayName || profile.name;
      user.image = user.image || profile.picture;
      await user.save();
    } else {
      user = new User({
        googleId: profile.id,
        displayName: profile.name,
        email: profile.email,
        image: profile.picture,
      });
      await user.save();
    }

    // Generate a JWT token
    const token = generateToken(user);
    console.log("google cookies", req.cookies)
    // Set the token as a cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true, // Set to true in production
      sameSite: "none",
      maxAge: 2592000000, // 30 days
    });
    console.log("google cookies", req.cookies)
    res.redirect("https://chiefsoft.onrender.com/"); // Redirect to your local application
  } catch (error) {
    console.error("Error during authentication", error);
    res.redirect("https://chiefsoft.onrender.com/login"); // Adjust to your local login route
  }
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
