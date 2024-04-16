const express = require("express");
const {
  getAllBooks,
  getBook,
  createBook,
  editBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

//Create 5 new GET routes
router.get("/", getAllBooks);

router.get("/:id", getBook);

router.post("/create", createBook);

router.put("/edit/:id", editBook);

router.delete("/delete/:id", deleteBook);
// router.get("/api/books/:id", (request, response, next) => {
//     //do stuff...
//     response.status(200).json({success: {message: "send all of the book details data by their ID"}});
// });
// router.post("/api/books/create/new", (request, response, next) => {
//     //do stuff...
//     response.status(200).json({success: {message: "send all of the book data that will have ability to create new books"}});
// });
// router.put("/api/books/edit/:id", (request, response, next) => {
//     //do stuff...
//     response.status(200).json({success: {message: "send all of the update comic book form page data to modify a book by theit ID"}});
// });

// router.delete("/api/books/delete/:id", (request, response, next) => {
//     //do stuff...
//     response.status(200).json({success: {message: "send all of the book data and have ability to delete a book by their ID"}});
// });

//export the router
module.exports = router;
