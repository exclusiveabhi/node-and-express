const http = require('http');
const fs = require('fs');

const file = fs.readFileSync('index.html', 'utf-8');
const jsonData = JSON.parse(fs.readFileSync('dummy.json', 'utf-8'));
const products = jsonData.products[0];

const server = http.createServer((req, res) => {
    console.log("Server chal gya bhaiya");
    //route yaha se define hai
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(file);
            break;

        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(jsonData));
            break;

        default:
            res.writeHead(404, 'Not found');
            res.end();
            break;
    }
});

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
