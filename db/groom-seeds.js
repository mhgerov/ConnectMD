const fs = require('fs');
const readline = require('readline');

var inputStream = fs.createReadStream(process.argv[2]);
var outputStream = fs.createWriteStream(process.argv[3]);

console.log(process.argv[2]);
var myInterface = readline.createInterface({input:inputStream});

myInterface.on('line', function (line) {
	var input = line;
	var badCommaIndex = line.search('ATLANTA')+'ATLANTA'.length;
	var output = input.slice(0,badCommaIndex)+input.slice(badCommaIndex+1);
	outputStream.write(output+'\n');
});

