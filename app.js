const express = require ('express')
const app = express()
var bodyParser = require('body-parser');
const loger = require('morgan')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/newlibrary')//connect to mongos IMPONT!!

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var books = require('./routers/books')
app.use('/books',books)

var customers = require('./routers/customers')
app.use('/customers',customers)

app.listen(3000)
