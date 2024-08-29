const User = require("../models/userSchema");
const Contact = require("../models/contctSchema");
require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.TRANSPORTERGMAIL, // Your email address
      pass: process.env.TRANSPORTERPASSWORD// Your email password
    }
  });
  
  const sendMessage = async (req, res) => {
    const { fullName, email, phone, company, message } = req.body;
    const userGmail = req.user.email;
    
    const mailOptions = {
      to: 'kecidavid22@gmail.com', 
      subject: 'New Message from ' + fullName,
      text: `
        You have a new message from ${fullName} (${email}, ${phone}, ${company != undefined ? company: ''}):
        
        ${message}
      `
    };
  
    try {
        const newContact = new Contact({
            fullName,
            email,
            phone,
            company,
            message,
            userGmail
          });
          await newContact.save();
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending message', error });
    }
  };

const toggleSubscribe = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.subscribe = !user.subscribe;
    await user.save();
    return res
      .status(200)
      .json({
        message: `Subscription status updated to ${user.subscribe}`,
        subscribe: user.subscribe,
      });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred", error });
  }
};

module.exports = { sendMessage, toggleSubscribe };
