const Model = require('../models/index');
  
let selectAllBooks = (req, res) => {
  Model.booksModel.find({}, (err, docs) => {
    if(!err){
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

let selectBooksById = (req, res) => {
  Model.booksModel.findById(req.params.id, (err, post) => {
    if(!err){
      res.send(post)
    }else{
      res.status(500).send(err)
    }
  })
}

let insertBooks = (req, res) => {
  Model.booksModel.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    stock: req.body.stock,
    category: req.body.category
  }, (err, data) => {
    if(!err){
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  })
}

let deleteBooks = (req, res) => {
  Model.booksModel.remove({
    _id: req.params.id
  }, (err, data) => {
    if(!err){
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  })
}

let updateBooks = (req, res) => {
  Model.booksModel.findOneAndUpdate({
    _id: req.params.id
  }, { $set: {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    stock: req.body.stock,
    category: req.body.category
  }}, (err, data) => {
    if(!err){
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  })
}

module.exports = {
  selectAllBooks,
  selectBooksById,
  insertBooks,
  deleteBooks,
  updateBooks
}
