var BufferList = require("bl");
var http = require("http");
var url = process.argv[2];


http.get(url, function(response) {
	response.pipe(BufferList(function (err, data){
		console.log(data.length);
		console.log(data.toString());
	}))
})