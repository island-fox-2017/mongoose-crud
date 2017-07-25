const express = require('express');
const books = require('./routers/books');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/library');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', books)

app.listen(3000)
