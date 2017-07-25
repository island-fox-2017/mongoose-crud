"use strict"

const transactionSchema = require('../models/transactions')

let findAllTransaction = (req, res) => {
  transactionSchema.find((err, result) => {
    if(!err){
      res.send(result)
    } else {
      res.status(500).send(err)
    }
  })
}

let findTransactionById = (req, res) => {
  let id = req.params.id
  transactionSchema.findById(id, (err, result) => {
    if(!err){
      res.send(result)
    } else {
      res.status(500).send(err)
    }
  })
}

let insertTransaction = (req, res) => {
  // console.log(req.body);
  let insertToTrxSchema = new transactionSchema(req.body)
  transactionSchema.create(req.body, (err, result) => {
    if(!err){
      res.send({ msg : 'Data inserted ok', result})
    } else {
      res.status(500).send(err)
    }
  })
}


let deleteTransaction = (req, res) => {
  let id = req.params.id
  transactionSchema.deleteOne({_id : id}, (err, result) => {
    if(!err){
      res.send('Delete transactions success')
    } else {
      res.status(500).send(err)
    }
  })
}


let editTransactionOne = (req, res) => {
  let id = req.params.id
  transactionSchema.updateOne({_id : id}, req.body, (err, result) => {
    if(!err){
      res.send(result)
    } else {
      res.status(500).send(err)
    }
  })
}

module.exports = {
  findAllTransaction,
  findTransactionById,
  insertTransaction,
  deleteTransaction,
  editTransactionOne
}
