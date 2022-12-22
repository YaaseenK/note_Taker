const express = require('express');
const path = require('path');

const router = express.Router();
// route to the

router.get('/', (req, res) => res.send('./index.html'));

// route to the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'))
});

module.exports = router;