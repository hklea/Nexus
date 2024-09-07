const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String }, 
  email: { type: String, required: true, unique: true },
  password: { type: String }, 
  googleId: { type: String }, 
  displayName: { type: String }, 
  image: { type: String }, 
  subscribe: {type: Boolean, default: false},
}, { timestamps: true });


userSchema.pre('save', async function (next) {
  if (this.password && this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});


userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
