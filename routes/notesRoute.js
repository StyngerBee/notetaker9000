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

// anote.delete('/:id', (req, res) => {
//   const deleteId = JSON.parse(req.params.id);
//   readFileAsync('./db/db.json', 'utf8').then(function(data) {
//     const notes = [].concat(JSON.parse(data));
//     const newNotes = []
//     for (let i = 0; i < notes.length; i++) {
//       if(deleteId !== notes[i].id) {
//         newNotes.push(notes[i])
//       }
//     }
//     return newNotes
//   }).then(function (notes) {
//     writeFileAsync('../db/db.json', JSON.stringify(notes))
//     res.send('notes updated')
//   })
// });

module.exports = anote;