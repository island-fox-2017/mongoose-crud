const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let books = require('./routers/books');
let customers = require('./routers/customers');
let transactions = require('./routers/transactions');

app.use('/api/books', books);
app.use('/api/customers', customers);
app.use('/api/transactions', transactions);

app.listen(3000, function(){
  console.log('I am listening in port 3000');
})
