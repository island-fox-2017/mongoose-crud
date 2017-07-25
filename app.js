'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Index = require('./routers/index');
const Book = require('./routers/book');
const Customer = require('./routers/customer');
const Transaction = require('./routers/transaction');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use('view engine', 'ejs')

app.use('/', Index);
app.use('/book', Book);
app.use('/customer', Customer)
app.use('/transaction', Transaction)

app.listen(process.env.PORT || 4500);
