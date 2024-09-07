const passport = require('passport');
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const User = require('../models/userSchema');
const { generateToken } = require("../utils/jwtUtils");

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
