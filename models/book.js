var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  isbn: String,
  title: {
    type: String,
    unique: true
  },
  author: String,
  category: String,
  stock: Number
}, {
  timestamps: true
})

var books = mongoose.model('book', bookSchema);

module.exports = books;
