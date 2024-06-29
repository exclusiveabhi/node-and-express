const http = require('http');

const data = {

    age: 18
};
//'Content-Type', 'application/json' 1st name of header 2nd type
const server = http.createServer((req, res) => {
    console.log("Server is running, bhaiyaa!");
    res.setHeader('Content-Type', 'application/json'); // Set the content type to JSON browser ko json data hai yeh bata hai !
    res.end(JSON.stringify(data)); // Send the JSON data as a string to browser
});

server.listen(8080, (err) => {
    if (err) {
        return console.error('Error starting server:', err);
    }
    console.log('Server is listening on port 8080');
});
