"use-strict"

var url = 'mongodb://localhost:27017/newlibrary'
var mongoose = require('mongoose')
var Schema =  mongoose.Schema


var transaction = mongoose.Schema({
  memberId : {
    type : String,
    required :true
  },
  days :{
    type : Number,
    required :true
  },
  out_date : {
    type : Date,
    required :true
  },
  due_date : {
    type : Date,
    required :true
  },
  in_date : {
    type : Date,
    required :true
  },
  fine : {
    type : Number,
    required :true
  }, booklist : [{type : Schema.Types.ObjectId, ref : 'Book'}],

})
var Transaction = mongoose.model('Transaction',transaction)
module.exports = Transaction;
