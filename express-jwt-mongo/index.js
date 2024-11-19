const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define your POST route for /api/auth/register
app.post('/api/auth/register', (req, res) => {
    console.log('Received request:', req.body); // Debugging
    res.send('User registered successfully!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Mock authentication logic (replace with real database check)
  if (email === 'nit@love.com' && password === 'nit123') {
      res.status(200).send({ message: 'Login successful!' });
  } else {
      res.status(401).send({ message: 'Invalid email or password' });
  }
});
