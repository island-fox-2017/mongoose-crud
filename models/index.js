const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/library');

var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;

var books = new schema({
  _id:ObjectId,
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
}) 


var customers = new schema({
  _id: ObjectId,
  name: String,
  memberid:String,
  address: String,
  zipcode: String,
  phone: String 
})

var booksModel = mongoose.model('Book', books);
var customersModel = mongoose.model('Customer', customers);


module.exports = {
  booksModel,
  customersModel
}
