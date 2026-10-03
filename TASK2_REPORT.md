# TASK 2 – RESTful Books API

## 1. Title

**Development and Testing of a RESTful Books API using Node.js, Express.js and Postman**

---

## 2. Aim

To develop a RESTful API for managing book records using **Node.js and Express.js** and to test the API using **Postman**.

---

## 3. Objectives

The main objectives of this task are:

- To understand the concept of RESTful APIs.
- To create an API using Node.js and Express.js.
- To implement CRUD operations.
- To work with JSON request and response data.
- To test API endpoints using Postman.
- To implement basic error handling for unavailable books.

---

## 4. Introduction

A **RESTful API (Representational State Transfer Application Programming Interface)** allows different applications to communicate with each other over HTTP.

In this project, a Books API is developed for managing book information. The API provides endpoints for creating, reading, updating and deleting book records.

The API uses standard HTTP methods such as:

- **POST** – Create a new book
- **GET** – Retrieve book information
- **PUT** – Update book information
- **DELETE** – Delete a book

Postman is used to send HTTP requests and verify the responses returned by the API.

---

## 5. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Framework for developing the REST API |
| JavaScript | Programming language |
| REST API | Communication architecture |
| JSON | Data format for requests and responses |
| Postman | API testing tool |
| VS Code | Development environment |

---

## 6. Project Description

The project is a simple **Books REST API**.

The API manages information about books such as:

- Book ID
- Book Title
- Author
- Category
- Price
- Quantity

The API supports complete CRUD functionality.

---

## 7. Features

The main features of the application are:

1. Add a new book.
2. Get all books.
3. Get a single book by ID.
4. Update book details.
5. Delete a book.
6. Return JSON responses.
7. Handle unavailable book IDs.
8. Test all API operations using Postman.

---

## 8. REST API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get a single book by ID |
| POST | `/api/books` | Add a new book |
| PUT | `/api/books/:id` | Update an existing book |
| DELETE | `/api/books/:id` | Delete a book |

---

# 9. CRUD Operations

## 9.1 CREATE – POST

The POST method is used to add a new book.

### Endpoint

```text
POST http://localhost:3000/api/books
```

### JSON Request Body

```json
{
  "title": "Rich Dad Poor Dad",
  "author": "Robert Kiyosaki",
  "category": "Finance",
  "price": 400,
  "quantity": 8
}
```

### Expected Response

```json
{
  "success": true,
  "message": "Book added successfully",
  "data": {
    "id": 4,
    "title": "Rich Dad Poor Dad",
    "author": "Robert Kiyosaki",
    "category": "Finance",
    "price": 400,
    "quantity": 8
  }
}
```

### Status Code

```text
201 Created
```

The response confirms that the book was successfully added.

---

## 9.2 READ – GET ALL BOOKS

The GET method is used to retrieve all available books.

### Endpoint

```text
GET http://localhost:3000/api/books
```

### Example Response

```json
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
```

### Status Code

```text
200 OK
```

This endpoint returns the list of books available in the API.

---

## 9.3 READ – GET BOOK BY ID

This operation retrieves a particular book using its unique ID.

### Endpoint

```text
GET http://localhost:3000/api/books/4
```

If the requested book exists, its information is returned.

### Example Successful Response

```json
{
  "success": true,
  "data": {
    "id": 4,
    "title": "Rich Dad Poor Dad",
    "author": "Robert Kiyosaki",
    "category": "Finance",
    "price": 400,
    "quantity": 8
  }
}
```

### Status Code

```text
200 OK
```

---

# 10. UPDATE – PUT

The PUT method is used to update an existing book.

### Endpoint

```text
PUT http://localhost:3000/api/books/4
```

### JSON Request Body

```json
{
  "title": "Atomic Habits Updated",
  "author": "James Clear",
  "category": "Self Help",
  "price": 500,
  "quantity": 15
}
```

### Example Response

```json
{
  "success": true,
  "message": "Book updated successfully",
  "data": {
    "id": 4,
    "title": "Atomic Habits Updated",
    "author": "James Clear",
    "category": "Self Help",
    "price": 500,
    "quantity": 15
  }
}
```

### Status Code

```text
200 OK
```

The response confirms that the selected book was successfully updated.

---

# 11. DELETE

The DELETE method is used to remove a book from the system.

### Endpoint

```text
DELETE http://localhost:3000/api/books/4
```

### Example Response

```json
{
  "success": true,
  "message": "Book deleted successfully",
  "data": {
    "id": 4,
    "title": "Atomic Habits Updated",
    "author": "James Clear",
    "category": "Self Help",
    "price": 500,
    "quantity": 15
  }
}
```

### Status Code

```text
200 OK
```

The response confirms that the book was deleted successfully.

---

# 12. Error Handling

The API handles requests for books that are not available.

For example:

```text
GET http://localhost:3000/api/books/4
```

If book ID `4` does not exist, the API returns:

```json
{
  "success": false,
  "message": "Book not found"
}
```

This helps the client understand that the requested book is unavailable.

---

# 13. HTTP Status Codes Used

| Status Code | Meaning |
|---|---|
| 200 | Request successful |
| 201 | Resource successfully created |
| 404 | Resource not found |

---

# 14. Postman Testing

The REST API was tested using **Postman**.

The following operations were tested:

### Test 1 – POST

**Purpose:** Add a new book.

```text
POST /api/books
```

**Result:** `201 Created`

**Message:** Book added successfully.

---

### Test 2 – GET All Books

**Purpose:** Retrieve all books.

```text
GET /api/books
```

**Result:** `200 OK`

---

### Test 3 – GET Book by ID

**Purpose:** Retrieve a specific book.

```text
GET /api/books/4
```

**Result:** Book information returned when the ID exists.

---

### Test 4 – PUT

**Purpose:** Update book information.

```text
PUT /api/books/4
```

**Result:** `200 OK`

**Message:** Book updated successfully.

---

### Test 5 – DELETE

**Purpose:** Delete a book.

```text
DELETE /api/books/4
```

**Result:** `200 OK`

**Message:** Book deleted successfully.

---

# 15. Project Structure

```text
books-api/
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── TASK2_REPORT.md
```

### Description of Files

**server.js**  
Contains the main server and REST API implementation.

**package.json**  
Contains project information, dependencies and scripts.

**package-lock.json**  
Stores the exact dependency versions installed in the project.

**README.md**  
Contains project documentation and usage information.

**TASK2_REPORT.md**  
Contains the detailed report of Task 2.

---

# 16. Working of the API

The basic working process of the API is:

```text
Client
   |
   | HTTP Request
   v
Express.js Server
   |
   | Process Request
   v
Books Data
   |
   | HTTP Response
   v
Client / Postman
```

The client sends an HTTP request to the Express.js server. The server processes the request and returns an appropriate JSON response.

---

# 17. Sample Book Data

The API can contain book records such as:

```json
[
  {
    "id": 1,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "category": "Fiction",
    "price": 350
  },
  {
    "id": 2,
    "title": "Atomic Habits",
    "author": "James Clear",
    "category": "Self Help",
    "price": 450
  },
  {
    "id": 3,
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "category": "Finance",
    "price": 400
  }
]
```

---

# 18. Advantages of REST API

The REST API provides several advantages:

1. Simple and easy to understand.
2. Uses standard HTTP methods.
3. Supports JSON data.
4. Easy to test using Postman.
5. Can be used by web and mobile applications.
6. Provides clear separation between client and server.

---

# 19. Testing Summary

| Operation | Method | Endpoint | Result |
|---|---|---|---|
| Create Book | POST | `/api/books` | Successful |
| Get Books | GET | `/api/books` | Successful |
| Get Book | GET | `/api/books/:id` | Successful |
| Update Book | PUT | `/api/books/:id` | Successful |
| Delete Book | DELETE | `/api/books/:id` | Successful |

---

# 20. Result

The RESTful Books API was successfully developed using **Node.js and Express.js**.

The API successfully performs:

- Create
- Read
- Update
- Delete

operations and returns JSON responses.

The API was tested successfully using **Postman**.

---

# 21. Conclusion

This task provided practical knowledge of RESTful API development using Node.js and Express.js.

Through this project, CRUD operations, HTTP methods, JSON request and response handling, API endpoints, status codes and error handling were implemented and tested.

Postman was used to verify that the API endpoints were working correctly.

Thus, the **Books REST API was successfully developed and tested**.

---

# 22. Learning Outcomes

After completing this task, the following concepts were understood:

- RESTful API architecture
- Node.js
- Express.js
- HTTP methods
- CRUD operations
- JSON data
- API endpoints
- HTTP status codes
- Error handling
- Postman API testing
- Client-server communication

---

# 23. Tools Used for Testing

**Development Tool:** Visual Studio Code

**Runtime:** Node.js

**API Framework:** Express.js

**API Testing Tool:** Postman

---

# 24. Final Project Status

```text
Project: Books REST API

Node.js              ✓
Express.js            ✓
POST API              ✓
GET API               ✓
GET by ID             ✓
PUT API               ✓
DELETE API            ✓
JSON Request/Response ✓
Error Handling        ✓
Postman Testing       ✓
```

---

## END OF REPORT