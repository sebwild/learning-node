var fs = require('fs');
var path = require('path');
var file_path = process.argv[2];
var file_ext = process.argv[3];
var file_list;


function filterFilesPerExt(callback) {
	fs.readdir(file_path, function doneReading(err, tmp_file_list) {
		file_list = tmp_file_list.filter(function(file_name) {
			 return path.extname(file_name) === '.' + file_ext; 
    });
		callback();
	});	
}

function printExtensions() {
	for (var i = 0; i < file_list.length; i++) {
		console.log(file_list[i]);
	}
}

filterFilesPerExt(printExtensions);
