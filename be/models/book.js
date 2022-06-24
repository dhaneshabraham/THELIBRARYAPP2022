// const mongoose = require('mongoose');

// var Books = mongoose.model('Book', {
//     Bname: { type: String },
//     About: { type: String },
//     Price: { type: Number }
// });
// module.exports = { Books };

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryApp');
const Schema = mongoose.Schema; 

var bookSchema = new Schema({
    Bname: { type: String },
    Author: { type: String },
    Price: { type: Number }
});
var books = mongoose.model('books', bookSchema);    
module.exports = books;
