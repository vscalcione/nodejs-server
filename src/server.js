const httpServer = require('http');
const port = 3000;

const server = httpServer.createServer((request, response) => {
   console.log('Serving page');
   response.end('Hello World. This is my first Node.js server!');
});

server.listen(port, (error) => {
   if (error)
      return console.log('something bad happened: ', error);
   console.log(`Server listening on port ${port}`);
})