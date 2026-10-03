# 📚 Books REST API

A simple RESTful API for managing books using Node.js and Express.js. The API supports complete CRUD operations and can be tested using Postman.

## 🚀 Features

- Create a new book
- Get all books
- Get a single book by ID
- Update book details
- Delete a book
- JSON request and response
- Error handling
- RESTful API architecture

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- JSON
- Postman

## 📁 Project Structure

```text
books-api/
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── TASK2_REPORT.md

⚙️ Installation
1. Open the project

Open the Books REST API project folder in VS Code.

2. Install dependencies

   Open the VS Code terminal and run:

     npm install
3. Start the server
node server.js

The server will run at:
    http://localhost:3000 

🔗 API Endpoints
Method	  Endpoint	                  Description
POST	   /api/books	           Create a new book
GET	       /api/books	             Get all books
GET	      /api/books/:id	       Get a single book
PUT	       /api/books/:id	          Update a book
DELETE	   /api/books/:id	           Delete a book

📝 API Testing
1. Create a Book

Method: POST

URL:

     http://localhost:3000/api/books

In Postman select:

     Body → raw → JSON

Use this JSON:
{
  "title": "Rich Dad Poor Dad",
  "author": "Robert Kiyosaki",
  "category": "Finance",
  "price": 400,
  "quantity": 8
}
Expected response:
{
  "success": true,
  "message": "Book added successfully"
}
 
 2. Get All Books

Method: GET

URL:http://localhost:3000/api/books
This returns all books stored in the API.
Example response:

{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "category": "Fiction",
      "price": 350
    }
  ]
} 

3. Get Book by ID
Method: GET
URL:
http://localhost:3000/api/books/4

The number 4 represents the book ID.
If the book does not exist, the API returns:
   {
  "success": false,
  "message": "Book not found"
   }

   4. Update a Book
Method: PUT
URL:
   http://localhost:3000/api/books/4

In Postman select:
Body → raw → JSON
Use:
{
  "title": "Atomic Habits Updated",
  "author": "James Clear",
  "category": "Self Help",
  "price": 500,
  "quantity": 15
}

Expected response:
{
  "success": true,
  "message": "Book updated successfully"
}

5. Delete a Book
Method: DELETE
URL:
  http://localhost:3000/api/books/4

This deletes the book with ID 4.
Expected response:
{
  "success": true,
  "message": "Book deleted successfully"
}

🧪 Testing
The API was tested successfully using Postman.
The following operations were tested:
- POST – Create Book
- GET – Get All Books
- GET – Get Book by ID
- PUT – Update Book
- DELETE – Delete Book
- Error handling for unavailable books

📌 HTTP Status Codes
StatusCode	            Meaning
200	                  Request successful
201	                 Resource created successfully
404	                Resource or route not found
500	                   Internal server error

🔄 CRUD Operations
CRUD stands for:
- Create – Add a new book
- Read – View books
- Update – Modify book details
- Delete – Remove a book

🎯 Project Objective
The objective of this project is to understand how to build and test a RESTful API using Node.js and Express.js.
This project demonstrates:
- API routing
- HTTP methods
- JSON data handling
- CRUD operations
- Error handling
- RESTful API architecture
- API testing using Postman

👩‍💻 Author
Pragati Suyal
B.Tech CSE

📄 License
This project is created for educational and learning purposes.