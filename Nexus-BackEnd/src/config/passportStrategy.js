// config/passport.js
const LocalStrategy = require('passport-local').Strategy;
const userdb = require('../models/userSchema')
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
// Load environment variables


module.exports = (passport) => {

  const clientid = process.env.CLIENT_ID;
  const clientsecret = process.env.CLIENT_SECRET;
  
  passport.use(new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await userdb.findOne({ email });
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        const match = await user.comparePassword(password);
        if (!match) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user); // Save the whole user object
      } catch (error) {
        console.log('Error during LocalStrategy authentication:', error);
        return done(error);
      }
    }
  ));
  

  passport.use(
    new OAuth2Strategy(
      {
        clientID: clientid,
        clientSecret: clientsecret,
        callbackURL: "https://nexus-express.onrender.com/auth/google/callback",
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await userdb.findOne({ googleId: profile.id });
          const firstName = profile.displayName.split(' ')[0]; 
          if (!user) {
            user = new userdb({
              googleId: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value,
              image: profile.photos[0].value,
              username: firstName,
            });
            
            await user.save();
          }
  
          return done(null, user); // Save the whole user object
        } catch (error) {
          console.error("Error during OAuth callback:", error);
          return done(error, null);
        }
      }
    )
  );
  

  passport.serializeUser((user, done) => {
    // Save both the user ID and the strategy used
    done(null, { id: user.id, strategy: user.googleId ? 'google' : 'local' });
  });
  
  passport.deserializeUser(async (data, done) => {
    try {
      let user;
      if (data.strategy === 'google') {
        // If the strategy was Google, find the user in the Google users collection
        user = await userdb.findById(data.id).exec();
      } else {
        // Otherwise, assume it's a local user
        user = await userdb.findById(data.id).exec();
      }
  
      if (!user) {
        return done(new Error("User not found"));
      }
      done(null, user);
    } catch (err) {
      console.error("Error during deserialization:", err);
      done(err);
    }
  });
    
};
