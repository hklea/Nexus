const passport = require('passport');
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const User = require('../models/userSchema');

passport.use(
  new OAuth2Strategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => { 
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          // Update existing user with data from Google if fields are missing
          user.displayName = user.displayName || profile.displayName;
          user.email = user.email || profile.emails[0].value;
          user.image = user.image || profile.photos[0].value;

          // Save the updated user information
          await user.save();
        } else {
          // Create a new user if none exists
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    })
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
