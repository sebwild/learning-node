var getShortMessages = require('./program.js');

myArray = [
	{message: 'jdklsjflkdaj', name: 'hans'},
	{message: 'loooooooooooooooooooool', stadt: 'reutlingen'},
	{message: 'ich schaue gerade the voice und es ist eigentlich garnicht meine sendung aber catrin schaut auch'},
	{someKey: 'hi'}
];

myNewArray = getShortMessages(myArray);

console.log(myNewArray);


