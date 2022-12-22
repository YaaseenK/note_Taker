const express = require('express');
const fs = require('fs');
let notesData = require('../db/db.json');

const path = require('path');

const api = express.Router();

// Get the db of notes
api.get('/api/notes', (req, res) => res.status(200).json(notesData));

// POST notes
api.post('/api/notes' , (req, res) => {
    // log request to post
    console.info(`${req.method} request received to add a note`)
    
    // destructuring items in req.body
    const { title, text } = req.body;

    // if all required properties are present
    if( title && text ) {
        // Variable for the object we will save
        const newNote = {
            title,
            text,
            noteId,
        }

        
        // read the current db.json file
        fs.readFile(`./db/db.json`, 'utf-8', (err, data) => {
            // log err
            if(err) console.log(err);
            else{

                // Convert string into JSON object
                const pasredNotes = JSON.parse(data);
                // Add a new review
                pasredNotes.push(newNote);
        // Write updated reviews back to the file
        fs.writeFile(`./db/db.json`, JSON.stringify(pasredNotes), (err) =>
            err
                ? console.error(err)
                : console.log(`note for ${pasredNotes.title} has been written to JSON file`)
              );
            }
        });

    const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Error in posting note');
    }
    
});

// delete Notes 
api.delete('api/notes/:id', (req, res) => {
    let noteID = parseInt(req.params.id);
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    console.log(noteList);
    notesData = noteList.filter(selected => {
        return selected.id != noteID;
    });
});

module.exports = api;