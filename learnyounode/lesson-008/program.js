var http = require('http');
var url = process.argv[2];
var buffer;


function addToBuffer(string) {
	if(buffer) {
		buffer = buffer + string;	
	} else {
		buffer = string;
	}
}


function printBuffer() {
	console.log(buffer.length);
	console.log(buffer);
}


http.get(url, function(response) {
	response.setEncoding('utf8');
	response.on('data', function(data) {
		addToBuffer(data);
	});
	response.on('end', function() {
		printBuffer();
	});
});
