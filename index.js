import { createServer } from 'http';
// const http = require('http'); //type:module in package.json

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!\n');
});

const port = process.env.PORT || 3030;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
