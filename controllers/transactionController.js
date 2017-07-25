var Transaction = require('../models/transactions');

var createTransaction = (req,res) => {
  let due = new Date();
  let newDue = due.setDate(due.getDate() + parseInt(5))
  console.log(due);
  console.log(newDue);
  
  Transaction.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: new Date(),
    due_date: due.setDate(due.getDate() + parseInt(req.body.days)),
    booklist: req.body.booklist
  },(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

var getAllTransaction = (req,res) => {
  Transaction.find()
  .populate({path: 'booklist', select: 'title'})
  .populate({path: 'memberid', select: 'name'})
  .exec((err,data) => {
    if(err) res.send(err)
    console.log(data);
    res.send(data)
  })
}

var updateTransaction = (req,res) => {
  let id = req.params.id;
  Transaction.findById(id,(err,data) => {
    if(err) res.send(err)
    data.in_date = new Date();
    if (data.in_date > data.due_date) {
      let late = Math.round( (data.in_date - data.due_date) / (1000*24*3600) );
      let totalBook = data.booklist.length * 500;
      data.fine = late * totalBook;
    }else {
      data.fine = 0;
    }
    
    data.save(err => {
      if(err) res.send(err)
      console.log('update success');
      res.send(data);
    })
  })
}

var deleteTransaction = (req,res) => {
  Transaction.findByIdAndRemove(req.params.id,(err) => {
    if(err) res.send(err)
    res.send('data already deleted')
  })
}

var getOneTransaction = (req,res) => {
  Transaction.findById(req.params.id)
  .populate({path: 'booklist', select: 'title'})
  .populate({path: 'memberid', select: 'name'})
  .exec((err,data) => {
    if(err) res.send(err)
    console.log(data);
    res.send(data)
  });
}

module.exports = {
  createTransaction,
  getAllTransaction,
  updateTransaction,
  deleteTransaction,
  getOneTransaction
};