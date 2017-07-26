var mongoose = require('mongoose')

var customersSchema = new mongoose.Schema({
  name : {
    type : String,
    required :true
  },
  memberId : {
    type : String,
    required :true
  },
  address : {
    type : String,
    required :true
  },
  zipcode : {
    type : String,
    required :true
  },
  phone : {
    type : String,
    required :true
  }
})

var Customer = mongoose.model('Customer',customersSchema)

module.exports = Customer;
