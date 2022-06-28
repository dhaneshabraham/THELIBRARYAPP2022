const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
var app = express();
app.use(express.static('./dist/LibraryApp'));

const { mongoose } = require('./db.js');
var bookController = require('./controllers/bookController.js');

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/api/books', bookController);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/LibraryApp/index.html'));
});
  