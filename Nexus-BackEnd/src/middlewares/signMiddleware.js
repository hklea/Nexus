// middlewares/authMiddleware.js
module.exports = (req, res, next) => {
console.log("here")
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: 'Unauthorizedd' });
  };
  