const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library', (err) => {
  if(!err){
    console.log('We are connected now');
  } else {
    console.log(err);
  }
})

const index = require('./routes/index');
const users = require('./routes/users');
const books = require('./routes/books');
const customers = require('./routes/customers');
const transactions = require('./routes/transactions');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/books', books);
app.use('/api/customers', customers);
app.use('/api/transactions', transactions);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
