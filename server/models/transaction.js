var mongoose = require('mongoose')
var Schema = mongoose.Schema

var transactionSchema = new Schema({
  memberid: String,
  days: {
    type: Number,
    required: [true, "days cannot be null"],
    min: [1, "minimum 1 days"],
    max: [14, "maximum 14 days"]
  },
  out_date: {
    type: Date,
    required: [true, "out date cannot be null"]
  },
  due_date: {
    type: Date,
    required: [true, "due date cannot be null"]
  },
  in_date: {
    type: Date
  },
  fine: {
    type: Number,
    min: 0,
    default: 0
  },
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book'}]
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
