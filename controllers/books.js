let bookData = require("../models/books")
const ObjectId = require('mongodb').ObjectId


function viewAll(req,res){
  bookData.find({},(err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.status(500).send(err)
    }
  })
}

function insertBook(req,res){
  let bookIn = new bookData({
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  })
  bookIn.save((err,bookData)=>{
    if(!err){
      res.send(bookData)
    }else {
      res.status(500).send(err)
    }
  })
}

function updateBook(req,res){
  bookData.update({
    _id : req.params.id
  },{
    $set :{
      isbn : req.body.isbn,
      title : req.body.title,
      author : req.body.author,
      category : req.body.category,
      stock : req.body.stock
    }
  },(err,data)=>{
    if (!err) {
      res.send(data)
    }else {
      res.send(err)
    }
  })

}

function deleteBook(req,res) {
  bookData.remove({_id:req.params.id},(err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.send(err)
    }
  })
}

module.exports = {viewAll, insertBook ,updateBook,deleteBook };
