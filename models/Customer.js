'use strict'

const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
})

const Customer = mongoose.model('Customer', customerSchema)


module.exports = Customer;
