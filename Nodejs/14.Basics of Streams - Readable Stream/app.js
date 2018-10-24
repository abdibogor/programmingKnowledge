var fs = require('fs');

var readStream = fs.createReadStream('file.txt', 'utf8');
var data = '';
readStream.on('data', function(chunk){
     console.log('----------------------------------------');
	 data += chunk;
     console.log(chunk);
})

readStream.on('end', function(chunk) {
	console.log(data);
	 console.log('------------------End-------------------');
})

