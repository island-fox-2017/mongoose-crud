'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema(
{
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
});

// Simpan ke collection books
// (standard penamaan collection huruf kecil semua dan akhirnya ada s)
let Book = mongoose.model('books', bookSchema);

module.exports = Book;
