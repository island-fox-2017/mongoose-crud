# Mongoose library CRUD

## My Mongoose CRUD App

Aplikasi ini merupakan aplikasi database library dengan fitur many to many CRUD sederhana menggunakan database mongoDB.


##### List of books routes:

| Route          |  HTTP  |                 Description                    |
|----------------|:------:|:----------------------------------------------:|
| /api/books     | GET    | Get all the books                              |
| /api/books/:id | GET    | Get user based on books id                     |
| /api/books/    | POST   | Input a new books                              |
| /api/books/:id | DELETE | Delete a books                                 |
| /api/books/:id | PUT    | Update a books with new info                   |

##### List of customers routes:

| Route              |  HTTP  |                 Description         |
|--------------------|:------:|:-----------------------------------:|
| /api/customers     | GET    | Get all the customers               |
| /api/customers/:id | GET    | Get user based on customers id      |
| /api/customers/    | POST   | Input a new customers               |
| /api/customers/:id | DELETE | Delete a customers                  |
| /api/customers/:id | PUT    | Update a customers with new info    |

##### List of transactions routes:

| Route                 |  HTTP  |                 Description             |
|-----------------------|:------:|:---------------------------------------:|
| /api/transactions     | GET    | Get all the transactions                |
| /api/transactions/:id | GET    | Get user based on transactions id       |
| /api/transactions/    | POST   | Input a new transactions                |
| /api/transactions/:id | DELETE | Delete a transactions                   |
| /api/transactions/:id | PUT    | Update a transactions with new info     |

##### Usage

npm init
npm install
node/nodemon app.js

access website via : 
http://localhost:3000/api/books
http://localhost:3000/api/customers 
http://localhost:3000/api/transactions
