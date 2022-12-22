const express = require('express');
const path = require('path');

const html_Routes = require('./routes/html_routes');
const api_Routes = require('./routes/api_routes');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(html_Routes);
app.use(api_Routes);



app.listen(PORT, () => {
    console.log(`Express Server listening for incoming request on PORT: ${PORT}`)
});