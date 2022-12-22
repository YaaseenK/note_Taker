const express = require('express');
let notesData = require('../db/db.json');

const path = require('path');

const api = express.Router();

// Get the db of notes
api.get('/api/notes', (req, res) => res.status(200).json(notesData));

// POST notes
api.post('/api/notes' , (req, res) => {
    console.info(`${req.method} request received to add a review`)

    const { title, text} = req.body;
    if( title && text ) {
        const newNote = {
            title,
            text
        }
    }
});

module.exports = api;