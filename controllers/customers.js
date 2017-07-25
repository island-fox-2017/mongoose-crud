const customer = require('../models/customers')

function getData(req,res) {
  customer.find({},(err ,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.status(500).send(err)
    }
  })
}

function insertData(req,res) {
  var newCustomer = new customer({
    name :req.body.name,
    memberId :req.body.memberId,
    address :req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })

  newCustomer.save((err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.status(500).send(err)
    }
  })
}

function updateData(req,res){
  customer.update({
    _id : req.params.id
  },{

      name : req.body.name,
      memberId : req.body.memberId,
      address : req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone

  },(err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.send(error)
    }
  })
}

function removeData(req,res) {
  customer.remove({_id:req.params.id},(err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.send(err)
    }
  })
}
module.exports = {getData,insertData,updateData,removeData};
