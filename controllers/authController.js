const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const loginLocalFailed = (request, response, next) => {
  response.status(401).json({
    error: { message: "Username or password is incorrect" },
    statusCode: 401,
  });
};
const logoutRequest = (request, response, next) => {
  request.logout((error) => {
    if (error) {
      response.status(400).json({
        error: { message: "something went wrong" },
        statusCode: 400,
      });
    }
    response.status(200).json({
      sucess: { message: "user logged out!" },
      statusCode: 200,
    });
  });
};
const signupRequest = (request, response, next) => {
  const { firstName, lastName, username, password } = request.body;
  bcrypt.hash(password, 10, async (error, hashedPassword) => {
    if (error) {
      return next(error);
    }
    const newUser = new User({
      firstName,
      lastName,
      username,
      password: hashedPassword,
    });
    try {
      await newUser.save();
      request.login(newUser, (err) => {
        if (err) {
          response.status(400).json({
            error: { message: "Something went wrong while signing up!" },
            statusCode: 400,
          });
        }
      });
      response.status(201).json({
        success: { message: "New user is created" },
        data: { firstName, lastName, username },
        statusCode: 201,
      });
    } catch (err) {
      if (err.code === 11000 && err.keyPattern.username) {
        response.status(400).json({
          error: { message: "user name already exit!" },
          statusCode: 400,
        });
      } else {
        response.status(500).json({
          error: { message: "internal server error" },
          statusCode: 500,
        });
      }
    }
  });
};

module.exports = { loginLocalFailed, logoutRequest, signupRequest };
