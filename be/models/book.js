const mongoose = require('mongoose');

var book = mongoose.model('book', {
    Bname: { type: String },
    Author: { type: String },
    Price: { type: Number }
});

module.exports = { book };
