//init the app and the port
//Require express
const express = require('express');
//create app
const app = express();

//create a port number
const PORT = 4000;

//Require morgan as Middleware
const morgan = require('morgan');

//require cors
const cors = require('cors');

//require path module
const path = require('node:path');

//use json
app.use(express.json());



//5 GET routes
app.get("/", (request, response, next) => {
    //send a message
   //response.send("This route points to the Home page");

    //refactor
    response.status(200).json({success: {message: "Index page is successful"}})
});

app.get("/about", (request, response, next) => {
    //send a message
    //response.send("This route points to the About page");
    response.status(200).json({success: {message: "About page successful."}})
});
app.get("/admin", (request, response, next) => {
    //send a message
    //response.send("This route points to the Admin page");
    response.status(200).json({success: {message: "Admin page successful."}})
});

app.get("/login", (request, response, next) => {
    //send a message
    //response.send("This route points to the login page");
    response.status(200).json({success: {message: "login page successful."}})
});
app.get("/admin/create-book", (request, response, next) => {
    //send a message
    //response.send("This route points to the create book  page");
    response.status(200).json({success: {message: "create book page successful."}})
});


    //Server
app.listen(PORT, () => {
    //SEND A MESSAGE
    console.log(`Carol's bookstore server is listening on port ${PORT}`);
    //go to localhost 
    console.log(`http://localhost:${PORT}/`);
});