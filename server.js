const http = require("http");

const server = http.createServer();

server.on("connection", (socket) => {
  console.log("new connection...");
});

server.listen(3000);

/*http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);*/