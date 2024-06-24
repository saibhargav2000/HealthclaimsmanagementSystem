const express = require('express');
const jwt = require('jsonwebtoken');
const { expressjwt: jwtMiddleware } = require('express-jwt');
const dotenv = require('dotenv');
const cors = require('cors');  // Import the cors package

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());  // Use the cors middleware

const SECRET_KEY = process.env.SECRET_KEY;

console.log('SECRET_KEY:', SECRET_KEY);  // Log the SECRET_KEY to ensure it's loaded

if (!SECRET_KEY || typeof SECRET_KEY !== 'string' || SECRET_KEY.trim() === '') {
  throw new Error('SECRET_KEY is not defined or is invalid in environment variables');
}

let users = [];

// JWT Middleware
const jwtAuthMiddleware = jwtMiddleware({ secret: SECRET_KEY, algorithms: ['HS256'] }).unless({ path: ['/login', '/signup', '/swagger'] });

// Apply JWT Middleware
app.use(jwtAuthMiddleware);

// Sample login endpoint to get a token
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  try {
    console.log(`Login attempt with username: ${username} and password: ${password}`);
    // Accept any username and password for development
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, password, confirmPassword, firstName, lastName, email, mobileNumber } = req.body;

  try {
    console.log(`Signup attempt with username: ${username}, firstName: ${firstName}, lastName: ${lastName}, email: ${email}, mobileNumber: ${mobileNumber}`);
    if (password !== confirmPassword) {
      res.status(400).json({ message: 'Passwords do not match' });
      return;
    }

    if (users.find((u) => u.username === username)) {
      res.status(409).json({ message: 'Username already exists' });
      return;
    }

    users.push({ username, password, firstName, lastName, email, mobileNumber });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add more endpoints as needed...

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
