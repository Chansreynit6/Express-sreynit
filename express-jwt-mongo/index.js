// index.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');  // This is the correct path to the user model

const app = express();

// Other Express setup here
app.use(express.json()); // For parsing JSON request bodies

// Example of using the User model
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).send('User created');
  } catch (err) {
    res.status(400).send('Error: ' + err.message);
  }
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/express-jwt-mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
})
.catch((err) => {
  console.log('Error connecting to MongoDB:', err.message);
});
