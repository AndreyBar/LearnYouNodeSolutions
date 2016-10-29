var fs = require("fs");
var path = require("path");

var output = [];

var getFilesByType = function(dir, extension, callback) {
	extension = "." + extension;
	fs.readdir(dir, function allFiles(err, files) {
		if (err) return callback(err);
		for (var file of files) {
			if (path.extname(file) == extension) output.push(file);
		}
		callback(null, output);
	})
};

module.exports = getFilesByType;


