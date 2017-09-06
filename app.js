// JavaScript File
var http =require('http');

var server = http.createServer(function(request, response) {
console.log("Received a request");
response.write("Hello World");
response.end();



});

server.listen(8080);