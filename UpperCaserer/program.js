var http = require("http");
var map = require("through2-map");

var server = http.createServer();
server.on('request', function(request, response) { 
     request.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase()  
     })).pipe(response); 
});

server.listen(process.argv[2]);