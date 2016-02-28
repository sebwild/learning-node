var fs = require('fs');
var number_of_lines = 0; 

function readNoOfLines(callback) {
  fs.readFile(process.argv[2], 'utf-8', function doneReading(err, fileContent) {
		number_of_lines = fileContent.toString().split('\n').length-1;
		callback();
	});
}

function printNoOfLines() {
	console.log(number_of_lines);
}

readNoOfLines(printNoOfLines);


