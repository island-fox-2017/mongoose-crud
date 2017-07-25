"use strict"

const transactionSchema = require('../models/transactions')

let findAllTransaction = (req, res) => {
  transactionSchema.find({})
  .populate('booklist')
  .then(transactionsbook => {
    res.send(transactionsbook)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


let findTransactionById = (req, res) => {
  let id = req.params.id
  transactionSchema.findById(id)
  .then(transactionsbook => {
    res.send(transactionsbook)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let insertTransaction = (req, res) => {
  let memberid = req.body.memberid
  let days = req.body.days
  let out_date = req.body.out_date
  let due_date = req.body.due_date
  let in_date = req.body.in_date
  let fine = req.body.fine
  let booklist = req.body.book_id
  transactionSchema.create({
    memberid: memberid,
    days: days,
    out_date: out_date,
    due_date: due_date,
    in_date: in_date,
    fine: fine,
    booklist: booklist
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


let deleteTransaction = (req, res) => {
  let id = req.params.id
  transactionSchema.deleteOne({
    _id : id
  })
  .then(doc => {
    res.send(doc)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


let editTransactionOne = (req, res) => {
  let id = req.params.id
  let memberid = req.body.memberid
  let days = req.body.days
  let out_date = req.body.out_date
  let due_date = req.body.due_date
  let in_date = req.body.in_date
  let fine = req.body.fine
  let booklist = req.body.book_id
  transactionSchema.updateOne({_id : id}, {
    memberid: memberid,
    days: days,
    out_date: out_date,
    due_date: due_date,
    in_date: in_date,
    fine: fine,
    booklist: booklist
  })
  .then(doc => {
    res.send(doc)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let addBookTransaction = (req, res) => {
  let id = req.params.id
  let booklist = req.body.book_id
  transactionSchema.update({_id: id}, {
    $push:{
      booklist: booklist
    }
  })
  .then(bookTransaction => {
    res.send(bookTransaction)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  findAllTransaction,
  findTransactionById,
  insertTransaction,
  deleteTransaction,
  editTransactionOne,
  addBookTransaction
}
