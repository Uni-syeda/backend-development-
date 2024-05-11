//const siteData = require('../data/s');
const Book = require("../models/bookModels");

//read all books
const getAllBooks = async (request, response, next) => {
    await Book.find({}).then((books) =>
    response.status(200).json({
      success: { message: "This route points to the Books page with all of the books" },
      data: books,
      statusCode: 200,
    })
    )
};

//read a book by the ID
const getBook = async (request, response, next) => {
  const { _id } = request.params;

    await Book.findOne({ _id: _id }).then((foundBook) => {
    response.status(200).json({
      success: { message: "This route points to the Books page with one of the books by the ID" },
      data: foundBook,
      statusCode: 200
    });  
  } 
  ) 
};

const createBook = async (req, res, next) => {

  const { title, author, publisher, genre, pages, rating, synopsis } = req.body;

  const newBook = new Book({
    title,
    author,
    publisher,
    genre,
    pages,
    rating,
    synopsis
  });
  
  try {
    await newBook.save();
  res
      .status(201)
      .json({ success: { message: "A new book is created" }, 
      data: newBook, statusCode: 201 });
  } catch (err) {
    res
      .status(400)
      .json({ error: { message: "Something went wrong creating a book!" }, statusCode: 400 });
  }
};


const editBook = async (req, res, next) => {
  const { id } = req.params;

  const { title, author, publisher, genre, pages, rating, synopsis } = req.body;

  try {
    await Book.findByIdAndUpdate(id, {
      $set: {
        title,
        author,
        publisher,
        genre,
        pages,
        rating,
        synopsis
      }
    }, { new: true });
    res
      .status(201)
      .json({ success: { message: "Book is updated" }, statusCode: 201 });
  } catch (err) {
    res
      .status(400)
      .json({ error: { message: "Something went wrong while editing the book~" }, statusCode: 400 });
  }
};


const deleteBook = async (req, res, next) => {

  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: { message: "Book deleted successfully!" }, statusCode: 200 });
  } catch (err) {
    res
      .status(400)
      .json({ error: { message: "Something went wrong while deleting the book!" }, statusCode: 400 });
  }
};

module.exports = { getAllBooks, getBook, createBook, editBook, deleteBook };












// const bookData = require("../data-1");

// const getAllBooks = async (request, response, next) => {
//   //do stuff...
//   const allBooks = bookData;
//   //response.send("Create-Book page")
//   response
//     .status(200)
//     .json({
//       success: { message: "send all of the book data" },
//       data: allBooks,
//     });
// };

// const getAllBooks = async (request, response, next) => {
//   try {
//     await response.status(200).json({success: { message: "Found all books!" },data: booksData, statusCode: 200});
//   } catch (error) {
//     response.status(400).json({error: { message: "something went wrong getting akk the books"}, statusCode: 400});
//   }
// }

// const getBook = async (request, response, next) => {
//   const { id } = request.params;

//   try {
//     await response
//       .status(200)
//       .json({
//         success: { message: "Found the book!" },
//         data: booksData,
//         statusCode: 200,
//       });
//   } catch (error) {
//     response
//       .status(400)
//       .json({
//         error: { message: "something went wrong to get the books" },
//         statusCode: 400,
//       });
//   }
// };

// const createBook = async (request, response, next) => {
//   const { title, author, publisher, genre, pages, rating, synopsis } =
//     request.body;

//   const newBook = new booksData({
//     title: title,
//     author: author,
//     publisher : publisher,
//     genre: genre,
//     pages : pages,
//     rating : rating,
//     synopsis : synopsis,
//   });

//   try {
//     await newBook.save();
//       response
//       .status(200)
//       .json({
//         success: { message: "A new book is create!" },
//         data: booksData,
//         statusCode: 200,
//       });
//   } catch (error) {
//     response
//       .status(400)
//       .json({
//         error: { message: "something went wrong to create the books" },
//         statusCode: 400,
//       });
//   }
// };

// const editBook = async (request, response, next) =>{
//     const{id} = request.params;

//     const { title,author,publisher,genre,pages,rating,synopsis} = request.body;
//     try{
//         await booksData.findByIdUpdate(id, {$set: {
//             title,
//             author,
//             publisher,
//             genre,
//             pages,
//             rating,
//             synopsis
//         }}, {new:true})
//         response.status(201).json({sucess:{message: "Book is updates"},statusCode: 200});
//     } catch(error){
//         response.status(400).json({error:{message:"Something went wrong while editing the book"},statusCode:400});
//     }
//  }

//  const deleteBook = async (request,response, next) =>{
//     const {id} = request.params;

//     try{
//         await bookData.findByidAndDelete(id);
//         response.status(201).json({sucess:{message: "Book is deleted succesfully"},statusCode: 200})
//     } catch(error){
//         response.status(400).json({error:{message:"Something went wrong deleting the book"},statusCode:400})
//     }
      
// };
 

// module.exports = { getAllBooks, getBook, createBook, editBook, deleteBook };

