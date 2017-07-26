var Book = require('../models/book')

var getAll = (req, res) => {
  Book.find()
  .then(books => {
    res.json(books)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var getOne = (req, res) => {
  Book.findById(req.params.id)
  .then(found => {
    res.json(found)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var update = (req, res) => {
  let response = {}
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updated => {
    response.message = `Data updated`
    response.data = updated
    res.json(response)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var remove = (req, res) => {
  let response = {}
  Book.findByIdAndRemove(req.params.id)
  .then(removed => {
    response.message = `Data removed`
    response.data = removed
    res.json(removed)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var create = (req, res) => {
  let book = new Book(req.body)
  book.save()
  .then(created => {
    res.json(created)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

module.exports = {
  getAll,
  getOne,
  update,
  remove,
  create
}
