const passport = require("passport");

const googleAuth = (req, res, next) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
};

const googleAuthCallback = (req, res, next) => {
  passport.authenticate("google", {
    successRedirect: "https://cheifsoft.onrender.com/",
    failureRedirect: "https://cheifsoft.onrender.com/signin",
  })(req, res, next);
};

const loginSuccess = async (req, res) => {
  if (req.user) {
    res
      .status(200)
      .json({ message: "User logged in successfully", user: req.user });
  } else {
    res.status(400).json({ message: "Not Authorized" });
  }
};

const login = (req, res) => {
  res.status(200).json({ message: "Logged in successfully" });
};

const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.json({ message: "Logged out successfully" });
  });
};

module.exports = {
  login,
  googleAuth,
  googleAuthCallback,
  loginSuccess,
  logout,
};
