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

module.exports = {
  createBook,
  getAllBook
}
