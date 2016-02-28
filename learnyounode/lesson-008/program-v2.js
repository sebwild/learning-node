var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(response) {
	response.pipe(bl(function (err, data) {
		data_string = data.toString();
		console.log(data_string.length);
		console.log(data_string);
	}));
});
