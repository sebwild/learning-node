var http = require('http');
var bl = require('bl');
var urls = {
	url1: {
		url: process.argv[2] 
	},
	url2: {
		url: process.argv[3] 
	},
	url3: {
		url: process.argv[4] 
	}
};


function countResult() {
	var count = 0;
	for(var key in urls) {
		if(urls[key].result) {
			count++;
		}
	}
	return count;
}


function getUrlResponse(url, callback) {
	http.get(url.url, function(response) {
		response.setEncoding('utf8');
		response.pipe(bl(function(err, data) {
			url.result = data.toString();
			if(countResult() === 3) {
				callback();	
			}
		}));
	});
}


function printUrlBuffer() {
	for(var key in urls) {
		console.log(urls[key].result.length);
	}
}


for(var key in urls) {
	getUrlResponse(urls[key], printUrlBuffer);
}


