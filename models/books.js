'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  'isbn'     : String,
  'title'    : String,
  'author'   : String,
  'category' : String,
  'stock'    : Number
});

const Books = mongoose.model('Books', BooksSchema);
module.exports = Books;