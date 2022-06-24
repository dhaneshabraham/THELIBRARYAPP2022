const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Book} = require('../models/book');

// => localhost:3000/books/
router.get('/', (req, res) => {
    Book.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Books :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Book.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Books :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    console.log(req.body)
    var bk = {
        Bname: req.body.Bname,
        About: req.body.About,
        Price: req.body.Price,
    };
      
   var book = new Book(bk);
   book.save();


    // bk.save((err, doc) => {
    //     if (!err) { res.send(doc); }
    //     else { console.log('Error in Books Save :' + JSON.stringify(err, undefined, 2)); }
    // });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var bk = {
        Bname: req.body.Bname,
        About: req.body.About,
        Price: req.body.Price,
    };


    book.findByIdAndUpdate(req.params.id, { $set: bk }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Book Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    book.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Book Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;