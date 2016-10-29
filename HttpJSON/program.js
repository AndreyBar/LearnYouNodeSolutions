var http = require("http");
var url = require("url");

var server = http.createServer(function (request, response) {
	var parsedUrl = url.parse(request.url, true);
	var result;
	
	if (parsedUrl.pathname == '/api/parsetime') {
		var parsedDate = new Date(parsedUrl.query.iso);
		result = {
			"hour": parsedDate.getHours(),
			"minute": parsedDate.getMinutes(),
			"second": parsedDate.getSeconds()
		};
		response.writeHead(200, {"Content-Type": "application/json"});
		response.end(JSON.stringify(result));

	} else if (parsedUrl.pathname == '/api/unixtime') {
		result = {
			"unixtime": new Date(parsedUrl.query.iso).getTime()
		}
		response.writeHead(200, {"Content-Type": "application/json"});
		response.end(JSON.stringify(result));

	} else {
		response.writeHead(404);
		response.end();
	}
})

server.listen(process.argv[2]);