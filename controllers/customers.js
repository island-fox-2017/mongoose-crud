"use strict"

const customerSchema = require('../models/customers')

let findAllCust = (req, res) => {
  customerSchema.find((err, result) => {
    if(!err){
      res.send(result)
    } else {
      res.status(500).send(err)
    }
  })
}

let findCustById = (req, res) => {
  let id = req.params.id
  customerSchema.findById(id, (err, result) => {
    if(!err){
      res.send(result)
    } else {
      res.status(500).send(err)
    }
  })
}

let insertCust = (req, res) => {
  let insertNewCustomer = new customerSchema(req.body)
  customerSchema.create(req.body, (err, result) => {
    if(!err){
      res.send({msg : 'Customer inserted ok', result})
    } else {
      res.status(500).send(err)
    }
  })
}

let deleteCust = (req, res) => {
  let id = req.params.id
  customerSchema.deleteOne({_id: id}, (err, result) => {
    if(!err){
      res.send('Delete customer success')
    } else {
      res.status(500).send(err)
    }
  })
}

let editOneCust = (req, res) => {
  let id = req.params.id
  customerSchema.updateOne({_id: id}, req.body, (err, result) => {
    if(!err){
      res.send(result)
    } else {
      res.status(500).send(err)
    }
  })
}

module.exports = {
  findAllCust,
  findCustById,
  insertCust,
  deleteCust,
  editOneCust
}
