const express = require('express');
const fs = require('fs');
let notesData = require('../db/db.json');
const uuid = require('../helpers/uuid');

const path = require('path');
const { info } = require('console');

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
                id: uuid(),
            };

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

    api.get('/api/notes/:id' , (req, res) => {
        console.info(`${req.method} request received to delete a note with id ${req.params.id}`);
        for (note of notesData) {
            if(note.id === (req.params.id)) {
                return res.json(`Note Title: ${note.title}, Note Text: ${note.text}`)
            }
        }
        return res.json('no notes found');
    });

    // delete Notes 
    api.delete('/api/notes/:id', (req, res) => {
        res.send('recieved request to delete note id:' + req.params.id)
        let noteId = req.params.id;
        for (note of notesData) {
            if(note.id === (req.params.id)) {
                let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
                console.log(notes);
                noteAfterDel = notes.filter(selected =>{
            return selected.id != noteId;
        });
            console.log(noteAfterDel);
        fs.writeFile(`./db/db.json`, JSON.stringify(noteAfterDel), (err) =>
            err
                ? console.error(err)
                : console.log(`note with id: ${note.id}, Titled: ${note.title} has been Deleted`));       
        }  
    } 
});
    

module.exports = api;