'use strict'

const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-crud')

const book = require('./routers/book')


app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.get('/', function(req,res){
  res.send('hai ini mongoose')
})

app.use('/book', book)


app.listen(3000)
