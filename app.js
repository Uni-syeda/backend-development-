require("dotenv").config();
require("./config/connection");
require("./config/authStrategy");

//init the app and the port
//Require express
const express = require("express");
const session = require("express-session");
//create app
const app = express();

//create a port number
const PORT = process.env.PORT || 3000;

//Require morgan as Middleware
const morgan = require("morgan");

const helmet = require("helmet");
const passport = require("passport");

//require cors
const cors = require("cors");

//require path module
const path = require("node:path");

const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes");

//use json
//app.use(express.json());

//Encode forms
app.use(express.json());

//use the Public directory
app.use(express.static(path.join(__dirname, "public")));
// console.log(__dirname);
// console.log(path.join(__dirname, "public"));
app.get('/', (request, response, next) => {
    response.status(200).json({success: {message: "Index successful"}, statusCode: 200});
   })
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//5 GET routes
// app.get("/", (request, response, next) => {
//   //send a message
//   //response.send("This route points to the Home page");

//   //refactor
//   response
//     .status(200)
//     .json({ success: { message: "Index page is successful" } });
// });

// app.get("/about", (request, response, next) => {
//   //send a message
//   //response.send("This route points to the About page");
//   response.status(200).json({ success: { message: "About page successful." } });
// });
// app.get("/admin", (request, response, next) => {
//   //send a message
//   //response.send("This route points to the Admin page");
//   response.status(200).json({ success: { message: "Admin page successful." } });
// });

// app.get("/login", (request, response, next) => {
//   //send a message
//   //response.send("This route points to the login page");
//   response.status(200).json({ success: { message: "login page successful." } });
// });
// app.get("/admin/create-book", (request, response, next) => {
//   //send a message
//   //response.send("This route points to the create book  page");
//   response
//     .status(200)
//     .json({ success: { message: "create book page successful." } });
//});

app.use("/api/books", bookRoutes);
app.use('/', authRoutes);
// //Create 5 new GET routes
// app.get("/api/books", (request, response, next) => {
//     //do stuff...
//     //response.send("Create-Book page")
//     response.status(200).json({success: {message: "send all of the book data"}});
// });
// app.get("/api/books/:_id", (request, response, next) => {
//     //do stuff...
//     response.status(200).json({success: {message: "send all of the book details data by their ID"}});
// });
// app.get("/api/books/create/new", (request, response, next) => {
//     //do stuff...
//     response.status(200).json({success: {message: "send all of the book data that will have ability to create new books"}});
// });
// app.get("/api/books/edit/:id", (request, response, next) => {
//     //do stuff...
//     response.status(200).json({success: {message: "send all of the update comic book form page data to modify a book by theit ID"}});
// });

// app.get("/api/books/delete/:id", (request, response, next) => {
//     //do stuff...
//     response.status(200).json({success: {message: "send all of the book data and have ability to delete a book by their ID"}});
// });

//Server
app.listen(PORT, () => {
  //SEND A MESSAGE
  console.log(`Codesquad comic books server is listening on port ${PORT}`);
  //go to localhost
  console.log(`http://localhost:${PORT}/`);
});
