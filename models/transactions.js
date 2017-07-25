"use-strict"

var url = 'mongodb://localhost:27017/newlibrary'
var mongoose = require('mongoose')

var db = mongoose.connection;


var transactions = mongoose.Schema({
  memberId : String,
  days : Number,
  out_date : new Date(),
  due_date : new Date(),
  in_date : new Date(),
  fine : Number,
})

module.exports = {};
