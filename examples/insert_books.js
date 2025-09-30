// insert_books.js

// Switch to plp_bookstore database
use("plp_bookstore");

// Insert 10+ sample books into books collection
db.books.insertMany([
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 50,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 45,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    genre: "Programming",
    published_year: 2008,
    price: 35,
    in_stock: false,
    pages: 176,
    publisher: "O'Reilly Media"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    genre: "Programming",
    published_year: 2018,
    price: 40,
    in_stock: true,
    pages: 472,
    publisher: "No Starch Press"
  },
  {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    genre: "Computer Science",
    published_year: 2009,
    price: 80,
    in_stock: true,
    pages: 1312,
    publisher: "MIT Press"
  },
  {
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    genre: "Programming",
    published_year: 2015,
    price: 30,
    in_stock: true,
    pages: 278,
    publisher: "O'Reilly Media"
  },
  {
    title: "Deep Learning",
    author: "Ian Goodfellow",
    genre: "Artificial Intelligence",
    published_year: 2016,
    price: 90,
    in_stock: false,
    pages: 800,
    publisher: "MIT Press"
  },
  {
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell",
    genre: "Artificial Intelligence",
    published_year: 2020,
    price: 120,
    in_stock: true,
    pages: 1152,
    publisher: "Pearson"
  },
  {
    title: "Design Patterns",
    author: "Erich Gamma",
    genre: "Software Engineering",
    published_year: 1994,
    price: 60,
    in_stock: true,
    pages: 395,
    publisher: "Addison-Wesley"
  },
  {
    title: "Refactoring",
    author: "Martin Fowler",
    genre: "Programming",
    published_year: 2019,
    price: 65,
    in_stock: true,
    pages: 448,
    publisher: "Addison-Wesley"
  },
  {
    title: "Python Crash Course",
    author: "Eric Matthes",
    genre: "Programming",
    published_year: 2019,
    price: 38,
    in_stock: true,
    pages: 544,
    publisher: "No Starch Press"
  }
]);
