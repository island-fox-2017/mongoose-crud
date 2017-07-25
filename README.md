# mongoose-crud

## Simple RESTFUL CRUD App with MongoDB and Mongoose as ODM
Demo app with basic REST API and using MongoDB as Database.

#### List of books routes:

| Route                          | HTTP          | Description  |
| ------------------------------ |:-------------:| ------------:|
| ```/api/books```   | GET         | Get all the books info(admin only) |
| ```/api/books/:id``` | GET       | Get a book data info by its ID (admin and/or authenticated user)|
| ```/api/books```   | POST        | Create a new books document (admin only) |
| ```/api/books/:id``` | DELETE    | Delete a books data (admin only) |
| ```/api/books/:id```  | PUT      | Update a books with new info (admin and/or authenticated user) |

#### List of customers routes:

| Route                          | HTTP          | Description  |
| ------------------------------ |:-------------:| ------------:|
| ```/api/customers```   | GET         | Get all the books info(admin only) |
| ```/api/customers/:id``` | GET       | Get a book data info by its ID (admin and/or authenticated user)|
| ```/api/customers```   | POST        | Create a new books document (admin only) |
| ```/api/customers/:id``` | DELETE    | Delete a books data (admin only) |
| ```/api/customers/:id```  | PUT      | Update a books with new info (admin and/or authenticated user) |

#### Usage:

With only npm:
```
npm init
npm install express-generator --save
npm install
npm install mongodb --save
npm install mongoose --save
```

Access the website via ```http://localhost:3000``` or API via ```http://localhost:3000/api```
