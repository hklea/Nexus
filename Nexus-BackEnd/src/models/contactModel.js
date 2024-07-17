// models/submission.js
const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
