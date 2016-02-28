var http = require('http');
var bl = require('bl');
var count = 0;
var result = [];

function getUrlResponse(index) {
	http.get(process.argv[2 + index], function(response) {
		response.setEncoding('utf8');
		response.pipe(bl(function(err, data) {
			if(err)
				console.log(err);

			result[index] = data.toString();
			count++;

			if(count === 3)
				printUrlBuffer();	
		}));
	});
}

function printUrlBuffer() {
	for(var i = 0; i < result.length; i++) 
		console.log(result[i]);
}

for(var i = 0; i < 3; i++)
	getUrlResponse(i);

