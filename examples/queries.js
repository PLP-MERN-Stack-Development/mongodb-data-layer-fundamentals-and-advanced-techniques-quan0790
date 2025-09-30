// queries.js

use("plp_bookstore");

// --------------------
// Basic CRUD Operations
// --------------------

// 1. Find all books in a specific genre
db.books.find({ genre: "Programming" });

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } });

// 3. Find books by a specific author
db.books.find({ author: "Robert C. Martin" });

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "Clean Code" },
  { $set: { price: 55 } }
);

// 5. Delete a book by its title
db.books.deleteOne({ title: "JavaScript: The Good Parts" });

// --------------------
// Advanced Queries
// --------------------

// Books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection (title, author, price only)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sorting by price ascending
db.books.find().sort({ price: 1 });

// Sorting by price descending
db.books.find().sort({ price: -1 });

// Pagination - page 1 (5 books)
db.books.find().limit(5);

// Pagination - page 2 (skip first 5, next 5)
db.books.find().skip(5).limit(5);

// --------------------
// Aggregation Pipelines
// --------------------

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// Author with most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// Group books by decade
db.books.aggregate([
  {
    $group: {
      _id: { $concat: [ { $toString: { $subtract: [ { $divide: ["$published_year", 10] }, { $mod: [{ $divide: ["$published_year", 10] }, 1] } ] } }, "0s" ] },
      count: { $sum: 1 }
    }
  }
]);

// --------------------
// Indexing
// --------------------

// Index on title
db.books.createIndex({ title: 1 });

// Compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 });

// Explain query performance (example)
db.books.find({ title: "Clean Code" }).explain("executionStats");
