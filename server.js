//  import express
const express = require('express');
// import routes
const html_Routes = require('./routes/html_routes');
const api_Routes = require('./routes/api_routes');
// PORT

const PORT = process.env.PORT || 3001;
// app is what server is using
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(api_Routes);
app.use(html_Routes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
