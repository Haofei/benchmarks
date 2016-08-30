// Load the http module to create an http server.
var http = require('http'),
  cluster = require('cluster'),
  num = require('os').cpus().length;

if(cluster.isMaster) {
  for(var i =0; i < num; i++) {
    cluster.fork();
  }
} else {
  // Configure our HTTP server to respond with Hello World to all requests.
  var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
  });

  // Listen on port 8000, IP defaults to 127.0.0.1
  server.listen(8000);

  // Put a friendly message on the terminal
  console.log("Server running at http://127.0.0.1:8000/");
}
