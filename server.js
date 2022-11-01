const express = require('express');
const path = require('path');
const api = require('./routes/indexRoute.js');
// Port for localhost
const PORT = process.env.PORT || 3001;
// Variable for using express
const app = express();

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to api
app.use('/api', api);

app.use(express.static('public'));

// GET Route to the homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route to the notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// LocalHost
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `)
);