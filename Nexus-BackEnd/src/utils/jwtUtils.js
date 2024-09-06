const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Generate a JWT token
const generateToken = (user) => {
  // Use a consistent secret key for both generation and verification
  const secret = process.env.JWT_SECRET || 'your-default-secret-key';

  return jwt.sign(
    { id: user._id, email: user.email , subscribe:user.subscribe}, // Payload
    secret, // Secret key
    { expiresIn: '30d' } // Token expiration
  );
};

// Verify a JWT token
const verifyToken = (token) => {
  const secret = process.env.JWT_SECRET || 'your-default-secret-key';

  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject(new Error('Invalid token'));
      } else {
        resolve(decoded);
      }
    });
  });
};

module.exports = { generateToken, verifyToken };
