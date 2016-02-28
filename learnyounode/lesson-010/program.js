var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];


// start server
var server = net.createServer(function(socket) {
	socket.end(strftime('%Y-%m-%d %H:%M' + '\n'));
});

// listen to port
server.listen(port);
