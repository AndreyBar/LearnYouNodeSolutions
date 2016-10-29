var fs = require("fs");
var filter = require("./filterDir");

var dir = process.argv[2];
var extension = process.argv[3];

filter(dir, extension, function(err, data){
	if (err) console.log(err);
	for (file of data) {
		console.log(file);
	}
});