const express = require('express');
const path = require('path');

const router = express.Router();
// get home

router.get('/', (req, res) => res.send('./index.html'));

// get note page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'))
});

module.exports = router;