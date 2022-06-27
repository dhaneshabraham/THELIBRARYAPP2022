const mongoose = require('mongoose');

var Book = mongoose.model('Book', {
    bname: { type: String },
    author: { type: String },
    about: { type: String },
    price: { type: Number }
});

module.exports = { Book };