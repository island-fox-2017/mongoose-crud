const transactions = require('../models/transactions')

function getData(req,res) {
  transactions.find({},(err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.send(err)
    }
  })
}

function insertData(req,res) {

  let newData = new transactions({
    memberId : req.body.memberId,
    out_date : req.body.out_date,
    days : req.body.days,
    due_date : req.body.due_date,
    in_date : req.body.in_date,
    fine : req.body.fine,
    booklist : req.body.booklist
  });

  newData.save((err,data)=>{
    if (!err) {
      res.send(data)
    }else {
      res.send(err)
    }
  })
}

function editData(req,res){
  transactions.update({
    _id:req.params.id
  },{
    memberId : req.body.memberId,
    out_date : req.body.out_date,
    days : req.body.days,
    due_date : req.body.due_date,
    in_date : req.body.in_date,
    fine : req.body.fine,
    booklist : req.body.booklist
  },(err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.send(err)
    }
  })
}

function deleteData(req,res){
  transactions.remove({
    id : req.params.id
  },(err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.send(err)
    }
  })
}

module.exports = { getData , insertData ,editData, deleteData};
