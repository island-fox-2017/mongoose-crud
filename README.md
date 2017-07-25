# mongoose-crud
Untuk latihan membuat crud dengan mongoose

# REST API
List of basic routes:

#### Book

| Route                | HTTP   | Description                         |
|----------------------|:------:|:------------------------------------|
| ```/api/books```     | GET    | Get all the books                   |
| ```/api/books/:id``` | GET    | Get a single book                   |
| ```/api/books```     | POST   | Create a new book                   |
| ```/api/books/:id``` | DELETE | Delete specified book               |
| ```/api/books/:id``` | PUT    | Update specified book with new info |

#### Customer

| Route                    | HTTP   | Description                             |
|--------------------------|:------:|:----------------------------------------|
| ```/api/customers```     | GET    | Get all the customers                   |
| ```/api/customers/:id``` | GET    | Get a single customer                   |
| ```/api/customers```     | POST   | Create a new customer                   |
| ```/api/customers/:id``` | DELETE | Delete specified customer               |
| ```/api/customers/:id``` | PUT    | Update specified customer with new info |

#### Transaction

| Route                       | HTTP   | Description                                |
|-----------------------------|:------:|:-------------------------------------------|
| ```/api/transactions```     | GET    | Get all the transactions                   |
| ```/api/transactions/:id``` | GET    | Get a single transaction                   |
| ```/api/transactions```     | POST   | Create a new transaction                   |
| ```/api/transactions/:id``` | POST   | Fill Booklist into specified transaction   |
| ```/api/transactions/:id``` | DELETE | Delete specified transaction               |
| ```/api/transactions/:id``` | PUT    | Update specified transaction with new info |

# USAGE
```
npm init
npm install --save express
npm install --save body-parser
npm install --save mongodb
npm install --save mongoose
```
Access the website API via http://localhost:3000/api
