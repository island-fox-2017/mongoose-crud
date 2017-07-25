const Transaction = require('../models/Transaction');
const Book = require('../models/Book');
const Customer = require('../models/Customer');

function getAllTransactions (req, res) {
  Transaction.find({})
  .populate('booklist._id')
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function getSingleTransaction(req, res) {
  Transaction.find({_id: req.params.id})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function addNewTransaction(req, res) {
  Transaction.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.bookid
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function pushToBookList(req, res) {
  Transaction.update({
    _id: req.params.id
  },{
    $push: {booklist: req.body.bookid}
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function deleteTransaction(req, res) {
  Transaction.deleteOne({_id: req.params.id})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function updateTransaction(req, res) {
  Transaction.update({_id: req.params.id}, {
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.bookid
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getAllTransactions,
  getSingleTransaction,
  addNewTransaction,
  pushToBookList,
  deleteTransaction,
  updateTransaction
}
