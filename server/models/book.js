
var mongoose = require('mongoose')

var bookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: [true, 'isbn column cannot be null'],
    unique: [true, 'isbn code already used']
  },
  title: {
    type: String,
    required: [true, 'title column cannot be null']
  },
  author: {
    type: String,
    required: [true, 'author column cannot be null']
  },
  category: {
    type: String,
    default: 'uncategorized'
  },
  stock: {
    type: Number,
    required: [true, 'Stock cannot be null'],
    min: 0
  }
}, { timestamps: true })

var Book = mongoose.model('Book', bookSchema)

module.exports = Book
