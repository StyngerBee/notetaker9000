const express = require('express');
// Imports our modular routers for /notes
const notesRoute = require('./notesRoute');

const app = express();

app.use('/notes', notesRoute);

module.exports = app;