// global modules
const express = require('express');
const path = require('path');
const api = require('./routes/indexRoute.js');

// global variables
const PORT = process.env.PORT || 3001;
const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes to apis
app.use('/api', api);
app.use(express.static('public'));
// Routes to the homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
// Routes to the notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// LocalHost address listening for requests to client
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `)
);