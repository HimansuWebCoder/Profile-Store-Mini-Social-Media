const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

// Dummy data for user authentication
const users = {
  username: 'admin',
  password: 'password123'
};

// Middleware to parse JSON bodies
app.use(express.json());

// Session setup
app.use(session({
  secret: 'yourSecretKey', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Make sure this is 'false' if using HTTP (not HTTPS)
}));

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', req.body);

  if (username === users.username && password === users.password) {
    req.session.user = username; // Store username in session
    console.log('Session after login:', req.session); // Debugging log
    return res.status(200).json({ message: 'Login successful!' });
  } else {
    return res.status(401).json({ message: 'Invalid username or password.' });
  }
});

// Protected route
app.get('/dashboard', (req, res) => {
  console.log('Session at /dashboard:', req.session); // Debugging session log

  if (req.session.user) {
    return res.status(200).json({ message: `Welcome, ${req.session.user}! This is your dashboard.` });
  } else {
    return res.status(401).json({ message: 'Unauthorized access. Please login first.' });
  }
});

// Logout route
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to logout.' });
    }
    return res.status(200).json({ message: 'Logged out successfully.' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
