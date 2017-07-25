const Customer = require('../models/Customer')

function getAllCustomers(req, res) {
  Customer.find()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function getSingleCustomer(req, res) {
  Customer.find({_id: req.params.id})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function addNewCustomer(req, res) {
  Customer.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function updateCustomer(req,res) {
  Customer.update({_id: req.params.id}, {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function deleteCustomer(req,res) {
  Customer.deleteOne({_id: req.params.id})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  getAllCustomers,
  getSingleCustomer,
  addNewCustomer,
  updateCustomer,
  deleteCustomer
}
