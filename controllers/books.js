"use strict"

const bookSchema = require('../models/books')

let findAllDocument = (req, res) => {
  bookSchema.find((err, result) => {
    if(!err){
      res.send(result)
    } else {
      res.status(500).send(err)
    }
  })
}

let findDocumentById = (req, res) => {
  let id = req.params.id
  bookSchema.findById(id, (err, result) => {
    if(!err){
      res.send(result)
    } else {
      res.status(500).send(err)
    }
  })
}

let insertDocument = (req, res) => {
  // console.log(req.body);
  let insertToBookSchema = new bookSchema(req.body)
  bookSchema.create(req.body, (err, result) => {
    if(!err){
      res.send({ msg : 'Data inserted ok', result})
    } else {
      res.status(500).send(err)
    }
  })
}


let deleteDocument = (req, res) => {
  let id = req.params.id
  bookSchema.deleteOne({_id : id}, (err, result) => {
    if(!err){
      res.send('Delete books success')
    } else {
      res.status(500).send(err)
    }
  })
}


let editOne = (req, res) => {
  let id = req.params.id
  bookSchema.updateOne({_id : id}, req.body, (err, result) => {
    if(!err){
      res.send(result)
    } else {
      res.status(500).send(err)
    }
  })
}

module.exports = {
  findAllDocument,
  findDocumentById,
  insertDocument,
  deleteDocument,
  editOne
}
