const express = require('express');

// Import our modular routers for /notes
const notes = require('./notesRoute');


const app = express();

app.use('/notes', notes);


module.exports = app;