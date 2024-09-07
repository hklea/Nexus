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
const passport = require('passport');
const session = require("express-session");
require('./config/passport')
const OAuth2Strategy = require("passport-google-oauth2").Strategy;

const { generateToken } = require("./utils/jwtUtils");






app.use(cors({
   origin: "https://chiefsoft.onrender.com",  // Adjust origin based on your client
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




app.use(session({
  secret: process.env.SESSION_SECRET || "YOUR_SECRET_KEY",
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());







passport.use(
  new OAuth2Strategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("Profile: ", profile);
        let user = await User.findOne({ email: profile.emails[0].value });
        
        if (user) {
          user.googleId = user.googleId || profile.id;
          user.displayName = user.displayName || profile.displayName;
          user.image = user.image || profile.photos[0].value;
          await user.save();
        } else {
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });
          console.log("User is saved from google: ", user);
          await user.save();
        }

        // Generate a JWT token
        const token = generateToken(user);

        // Set the token as a cookie
        done(null, { user, token });
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Serialize user with the token
passport.serializeUser((data, done) => {
  done(null, { id: data.user._id, token: data.token });
});

passport.deserializeUser(async (data, done) => {
  try {
    const user = await User.findById(data.id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});


// Google login route
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));




// Google callback route
app.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "https://chiefsoft.onrender.com/login", // Redirect to React login page on failure
}), (req, res) => {
  res.cookie("jwt", req.user.token, {
    httpOnly: true,
    secure: true, // Set to true in production
    sameSite: "none",
    maxAge: 2592000000, // 30 days
  });
console.log("hereeeeeee")
  res.redirect("https://chiefsoft.onrender.com/"); // Redirect to React dashboard on success
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
