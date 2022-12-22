const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;
 
// TODO: Invoke app.use() and serve static files from the '/public' folder
app.use(express.static('public'));

app.get('/', (req, res) => res.send('./index.html'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'))
});


app.listen(PORT, () => {
    console.log(`Express Server listening for incoming request on PORT: ${PORT}`)
});