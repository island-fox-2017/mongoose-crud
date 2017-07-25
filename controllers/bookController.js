'use strict'

var Books = require('../models/books');

var createBook = (req,res) => {
  Books.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  },(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

var getAllBook = (req,res) => {
  Books.find({},(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

var updateBook = (req,res) => {
  Books.update({ _id: req.params.id }, { $set: req.body}, (err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result)
  })
}

var deleteBook = (req,res) => {
  Books.findByIdAndRemove(req.params.id, (err) => {
    if(err) res.send(err)
    res.send('data already delete')
  })
}

var findOneBook = (req,res) => {
  Books.findById(req.params.id,(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

module.exports = {
  createBook,
  getAllBook,
  updateBook,
  deleteBook,
  findOneBook
}
