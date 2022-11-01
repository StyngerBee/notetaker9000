const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const db = require('../db/db.json')

// GET Route for retrieving all the feedback
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for `);

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting notes
notes.post('/', (req, res) => {
  console.info(`${req.method} request received for `);
    // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the new note being built and saved
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    // Read the current db file and then append the new 
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

// notes.delete('/:id', (req, res) => {
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

module.exports = notes;