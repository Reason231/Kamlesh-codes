const http = require("http");

const app = require("./src/config/express.config");

const server = http.createServer(app);

server.listen(8000, 'localhost', (err) => {
  if (!err) {
    console.log("Server is running on port 8000");  // Ensure the port number is correct here
    console.log("Press ctrl + C to end server");
  }
});


