var Transaction = require('../models/transaction')
var Book = require('../models/book')

var getAll = (req, res) => {
  Transaction.find()
  .populate('booklist', 'title')
  .exec()
  .then(trans => res.json(trans))
  .catch(err => res.status(500).json(err))
}

var getOne = (req, res) => {
  Transaction.findById(req.params.id)
  .populate('booklist', 'title')
  .exec()
  .then(found => res.json(found))
  .catch(err => res.status(500).json(err))
}

var update = (req, res) => {
  let response = {}
  Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updated => {
    response.message = `Data has been updated`
    response.data = updated
    res.json(response)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var remove = (req, res) => {
  let response = {}
  Transaction.findByIdAndRemove(req.params.id)
  .then(removed => {
    response.message = `Data has been removed`
    response.data = removed
    res.json(response)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var create = (req, res) => {
  let outDate = new Date(req.body.out_date)
  let dueDate = new Date(req.body.due_date)
  let elapsedTime = dueDate - outDate
  let countedDays = Math.floor(elapsedTime / (24*60*60*1000))
  let transaction = new Transaction({
    days: countedDays,
    out_date: outDate,
    due_date: dueDate,
    booklist: req.body.booklist
  })
  transaction.save()
  .then(created => {
    let bookIds = created.booklist
    for (let i = 0; i < booklist.length; i++) {
      Book.findById(bookIds[i])
      .then(book => {
        book.stock -= 1
        book.save()
        .then(saved => console.log(`stock updated`))
        .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
    }
    res.json(created)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
}

var returned = function (req, res) {
  Transaction.findById(req.params.id)
  .then(found => {
    let in_date = new Date(req.body.in_date)
    let booksCount = found.booklist.length
    let overDueDays = Math.floor((in_date - found.due_date) / (24*60*60*1000))
    let totalFine = 500 * booksCount * overDueDays
    found.in_date = req.body.in_date
    found.fine = totalFine
    found.save()
    .then(newTrans => {
      let bookIds = newTrans.booklist
      for (let i = 0; i < bookIds.length; i++) {
        Book.findById(bookIds)
        .then(book => {
          book.stock += 1
          book.save()
          .then(created => {console.log(`stock updated`)})
          .catch(err => {console.log(errr)})
        })
      }
      res.json(newTrans)
    })
    .catch(err => res.status(500).json(err))
  })
  .catch(err => res.status(500).json(err))
}

module.exports = {
  getAll,
  getOne,
  update,
  remove,
  create,
  returned
}
