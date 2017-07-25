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
  Model.booksModel.create({books: {
    isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      stock: req.body.stock,
      category: req.body.category
    }})
}

module.exports = {
  selectAllBooks,
  selectBooksById
}
