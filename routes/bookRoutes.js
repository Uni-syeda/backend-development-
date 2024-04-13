const express = require("express");

const router = express.Router();

//Create 5 new GET routes
router.get("/api/books", (request, response, next) => {
    //do stuff...
    //response.send("Create-Book page")
    response.status(200).json({success: {message: "send all of the book data"}});
});

router.get("/api/books/:id", (request, response, next) => {
    //do stuff...
    response.status(200).json({success: {message: "send all of the book details data by their ID"}});
});
router.post("/api/books/create/new", (request, response, next) => {
    //do stuff...
    response.status(200).json({success: {message: "send all of the book data that will have ability to create new books"}});
});
router.put("/api/books/edit/:id", (request, response, next) => {
    //do stuff...
    response.status(200).json({success: {message: "send all of the update comic book form page data to modify a book by theit ID"}});
});

router.delete("/api/books/delete/:id", (request, response, next) => {
    //do stuff...
    response.status(200).json({success: {message: "send all of the book data and have ability to delete a book by their ID"}});
});


module.exports = router;