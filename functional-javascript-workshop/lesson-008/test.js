function doStuff() {
	var obj = arguments;
	Object.keys(obj).forEach(function(key) {
		console.log(obj[key]);
	});
}

doStuff('alles', 'cool', 'hier');
