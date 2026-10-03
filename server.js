const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary in-memory library database
let books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    price: 350,
    quantity: 10
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    price: 650,
    quantity: 5
  },
  {
    id: 3,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    category: "Programming",
    price: 500,
    quantity: 7
  }
];

/*
====================================================
GET - Home
====================================================
*/

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Library REST API",
    endpoints: {
      getAllBooks: "GET /api/books",
      getBook: "GET /api/books/:id",
      addBook: "POST /api/books",
      updateBook: "PUT /api/books/:id",
      deleteBook: "DELETE /api/books/:id"
    }
  });
});

/*
====================================================
GET - Get all books
====================================================
*/

app.get("/api/books", (req, res) => {
  res.json({
    success: true,
    count: books.length,
    data: books
  });
});

/*
====================================================
GET - Get book by ID
====================================================
*/

app.get("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found"
    });
  }

  res.json({
    success: true,
    data: book
  });
});

/*
====================================================
POST - Add new book
====================================================
*/

app.post("/api/books", (req, res) => {
  const { title, author, category, price, quantity } = req.body;

  // Validation
  if (!title || !author || !category || price === undefined || quantity === undefined) {
    return res.status(400).json({
      success: false,
      message: "Please provide title, author, category, price and quantity"
    });
  }

  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    category,
    price: Number(price),
    quantity: Number(quantity)
  };

  books.push(newBook);

  res.status(201).json({
    success: true,
    message: "Book added successfully",
    data: newBook
  });
});

/*
====================================================
PUT - Update book
====================================================
*/

app.put("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Book not found"
    });
  }

  const { title, author, category, price, quantity } = req.body;

  if (!title || !author || !category || price === undefined || quantity === undefined) {
    return res.status(400).json({
      success: false,
      message: "Please provide title, author, category, price and quantity"
    });
  }

  books[bookIndex] = {
    id,
    title,
    author,
    category,
    price: Number(price),
    quantity: Number(quantity)
  };

  res.json({
    success: true,
    message: "Book updated successfully",
    data: books[bookIndex]
  });
});

/*
====================================================
DELETE - Delete book
====================================================
*/

app.delete("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Book not found"
    });
  }

  const deletedBook = books.splice(bookIndex, 1);

  res.json({
    success: true,
    message: "Book deleted successfully",
    data: deletedBook[0]
  });
});

/*
====================================================
404 - Route not found
====================================================
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

/*
====================================================
Start Server
====================================================
*/

app.listen(PORT, () => {
  console.log(`Library REST API running on http://localhost:${PORT}`);
});


