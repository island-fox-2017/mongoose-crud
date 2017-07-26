const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/library');

var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;

var books = new schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
},{
  versionKey: false
}) 


var customers = new schema({
  name: String,
  memberid:String,
  address: String,
  zipcode: String,
  phone: String 
},{
  versionKey: false
})

var transactions = new schema({
  memberid: [{
    type: schema.Types.ObjectId,
    ref: 'Customer'
  }],
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: schema.Types.ObjectId,
    ref: 'Book'
  }] 
}, {
  versionKey: false
})

var booksModel = mongoose.model('Book', books);
var customersModel = mongoose.model('Customer', customers);
var transactionsModel = mongoose.model('Transaction', transactions);

module.exports = {
  booksModel,
  customersModel,
  transactionsModel
}
