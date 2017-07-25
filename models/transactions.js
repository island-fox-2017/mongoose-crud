"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  
})

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
