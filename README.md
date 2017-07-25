# Mongoose-Crud App

Demo app for basic MongoDB using Mongoose as ODM with Representational state transfer (REST)

## Mongoose-Crud REST API

List of basic routes:

| Route       | HTTP | Description                 |
| ----------- |:----:| ---------------------------:|
| /           | GET  | Welcome To Mongoose ODM!    |

List of user routes:

| Route         | HTTP    | Description                        |
| ---------     |:-------:| :----------------------------------|
| /book         |POST     | Create a book                      |
| /book         |GET      | Get all books info                 |
| /book/:id     |GET      | Get a single book info             |
| /book/:id     |DELETE   | Delete a single book               |
| /book/:id      |PUT      | Update a single book with new info |
| /customer       |POST     | Create a customer                      |
| /customer       |GET      | Get all customers info                 |
| /customer/:id   |GET      | Get a single customer info             |
| /customer/:id   |DELETE   | Delete a single customer               |
| /customer/:id    |PUT      | Update a single customer with new info |
| /transaction       |POST     | Create a transaction                      |
| /transaction/:id   |POST     | Push/Include a book inside a transaction  |
| /transaction       |GET      | Get all transactions info                 |
| /transaction/:id   |GET      | Get a single transaction info             |
| /transaction/:id   |DELETE   | Delete a single transaction               |
| /transaction/:id    |PUT      | Update a single transaction with new info |
