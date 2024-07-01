# Node.js and Express.js

Welcome to the Node.js and Express.js repository with code examples!

## Repository URL
[GitHub Repository](https://github.com/exclusiveabhi/node-and-express.git)

## Author
Abhishek Rajpoot

## Table of Contents
- [Installation Guide](#installation-guide)
- [Basic Express Server](#basic-express-server)
- [Middleware in Express](#middleware-in-express)
- [Routing in Express](#routing-in-express)
- [Handling Requests and Responses](#handling-requests-and-responses)
- [Working with Static Files](#working-with-static-files)
- [Error Handling](#error-handling)

## Installation Guide

To set up the repository on your local machine, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/exclusiveabhi/node-and-express.git
    ```

2. Navigate to the project directory:
    ```sh
    cd node-and-express
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Run the application:
    ```sh
    node index.js
    ```

## Basic Express Server

```javascript
const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.send('Hello, World!');
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

## Middleware in Express

server.use((req, res, next) => {
    console.log('Middleware executed');
    next();
});

## Routing in Express

server.get('/hello', (req, res) => {
    res.send('Hello from the /hello route!');
});

server.post('/data', (req, res) => {
    res.send('Data received via POST');
});

## Handling Requests and Response

server.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
});

## Working with Static Files

server.use(express.static('public'));

## Error Handling

server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

## Conclusion

This repository covers the basics of Node.js and Express.js. Feel free to explore the examples and modify them to suit your needs. For more information, refer to the official Node.js documentation and Express.js documentation.

Happy coding!