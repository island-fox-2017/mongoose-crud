var mongoose = require('mongoose')

var bookSchema = new mongoose.Schema({
  isbn :{
    type : String,
    required :true
  } ,
  title : {
    type : String,
    required :true
  },
  author : {
    type : String,
    required :true
  },
  category : {
    type : String,
    required :true
  },
  stock : {
    type : Number,
    required :true
  }
})

var Book = mongoose.model('Book',bookSchema)

module.exports = Book;
