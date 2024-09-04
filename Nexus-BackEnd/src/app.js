require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./Database/conn"); // Ensure this file connects to your database
const PORT = 3000;
const passport = require("passport"); 
const userdb = require("./models/userSchema");
require("./config/passportStrategy")(passport);
const sessionConfig = require("./config/sessionConfig");



app.use(
  cors({
    origin: "https://cheifsoft.onrender.com",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());



// Setup passport
app.use(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));


// Use routers
const indexRouter = require("./routers/indexRouter");
app.use("/", indexRouter);

app.get("/users", async (req, res) => {
  try {
    console.log("herus");
    const users = await userdb.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const Contact = require('./models/contctSchema.js');

// API route to get all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find(); // Retrieve all contacts from the database
    return res.status(200).json(contacts); // Respond with the contacts as JSON
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    return res.status(500).json({ message: 'Error retrieving contacts', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port no ${PORT}`);
});
