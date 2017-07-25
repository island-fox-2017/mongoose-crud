const Book = require('../models/Book');

function getAllBooks(req, res) {
  Book.find()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function getSingleBook(req, res) {
  Book.find({_id: req.params.id})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function addNewBook(req, res) {
  Book.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function updateBook(req,res) {
  Book.update({_id: req.params.id}, {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function deletebook(req,res) {
  Book.deleteOne({_id: req.params.id})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deletebook
}
