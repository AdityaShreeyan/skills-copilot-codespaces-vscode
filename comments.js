// Create Web Server

const express = require('express');
const app = express();
const path = require('path');

// Set up the static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up the comments route
app.get('/comments', (req, res) => {
  // Send back the comments
  res.json([
    { username: 'Todd', comment: 'lol that is so funny' },
    { username: 'Skyler', comment: 'I like turtles' },
    { username: 'Sk8erBoi', comment: 'Plz delete this post' }
  ]);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
