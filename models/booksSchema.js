'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
  isbn: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: String,
    required: true
  }
});

var Book = mongoose.model('Book', booksSchema);

module.exports = Book;
