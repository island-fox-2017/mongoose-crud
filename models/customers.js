var mongoose = require('mongoose')

var customersSchema = new mongoose.Schema({
  name : String,
  memberId : String,
  address : String,
  zipcode : String,
  phone : String,
})

var Customer = mongoose.model('Customer',customersSchema)

module.exports = Customer;
