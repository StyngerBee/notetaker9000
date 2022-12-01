const anote = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuId');
const db = require('../db/db.json')

anote.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

anote.post('/', (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    readAndAppend(newNote, './db/db.json');

    const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    } else {
      res.json('Error posting note');
    }

});

anote.delete('/:id', (req, res) => {
  const destroyId = JSON.parse(req.params.id);
  
});

module.exports = anote;