'use strict'

var Customer = require('../models/customer');

var createCustomer = (req,res) => {
  Customer.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  },(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

var getAllCustomer = (req,res) => {
  Customer.find({},(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

var updateCustomer = (req,res) => {
  Customer.update({ _id: req.params.id }, { $set: req.body }, (err,result) => {
    if(err) res.send(err);
    console.log(result);
    res.send(result);
  })
}

var deleteCustomer = (req,res) => {
  Customer.findByIdAndRemove(req.params.id,(err) => {
    if(err) res.send(err);
    res.send('data already deleted')
  })
}

var getOneCustomer = (req,res) => {
  Customer.findById(req.params.id,(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

module.exports = {
  createCustomer,
  getAllCustomer,
  updateCustomer,
  deleteCustomer,
  getOneCustomer
};