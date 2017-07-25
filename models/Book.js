'use strict'

const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
