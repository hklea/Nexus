// models/contactSchema.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullName: { type: String},
  email: { type: String},
  phone: { type: String },
  company: { type: String },
  message: { type: String, },
  userGmail: { type: String, },
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
