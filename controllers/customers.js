const Model = require('../models/index');


let selectAllCustomers = (req, res) => {
  Model.customersModel.find({}, (err, docs) => {
    if(!err){
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

let selectCustomersById = (req, res) => {
  Model.customersModel.findById(req.params.id, (err, post) => {
    if(!err){
      res.send(post)
    }else{
      res.status(500).send(err)
    }
  })
}

let insertCustomers = (req, res) => {
  // var customer = new Model.customersModel(req.body)
  Model.customersModel.create(req.body, (err, data) => {
    if(!err){
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  })
}

let deleteCustomers = (req, res) => {
  Model.customersModel.remove({
    _id: req.params.id
  }, (err, data) => {
    if(!err){
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  })
}

let updateCustomers = (req, res) => {
  Model.customersModel.findOneAndUpdate({
    _id: req.params.id
  }, { $set: {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcore,
    phone: req.body.phone 
  }}, (err, data) => {
    if(!err){
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  })
}

module.exports = {
  selectAllCustomers,
  selectCustomersById,
  insertCustomers,
  deleteCustomers,
  updateCustomers
}
