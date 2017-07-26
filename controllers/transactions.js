const Model = require('../models/index');

let selectAllTransactions = (req, res) => {
  Model.transactionsModel.find()
  .populate({path:"booklist", select: "title"})
  .populate({path:"memberid", select: "name"})
  .exec( (err, data) => {
    if(!err) {
      // res.send(data)
      res.render('transactions', {data_transactions : data})
      console.log(data);
    }else{
      res.status(500).send(err)
    }
  })
}

let selectTransactionsById = (req, res) => {
  Model.transactionsModel.findById(req.params.id)
  .populate({path:"booklist", select: "title"})
  .populate({path:"memberid", select: "name"})
  .exec( (err, data) => {
    if(!err) {
      res.send(data)
      console.log(data);
    }else{
      res.status(500).send(err)
    }
  })
}

let insertTransactions = (req, res) => {
  Model.transactionsModel.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.book_id
  }, (err, data) => {
    if(!err){
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  })
}

let deleteTransactions = (req, res) => {
  Model.transactionsModel.remove({
    _id: req.params.id
  }, (err, data) => {
    if(!err){
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  } )
}

let updateTransactions = (req, res) => {
  Model.transactionsModel.findOneAndUpdate({
    _id: req.params.id
  }, { $set : {
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.book_id
  }}, (err, data) => {
    if(!err) {
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  })
}

module.exports = {
  selectAllTransactions,
  selectTransactionsById,
  insertTransactions,
  deleteTransactions,
  updateTransactions
}
