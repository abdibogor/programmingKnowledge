var fs = require('fs');

var readStream =  fs.createReadStream('file.txt', 'utf8');
var writeStream = fs.createWriteStream('write_file.txt')


readStream.on('data', function(chunk){
     console.log('----------------------------------------');
	 writeStream.write(chunk);
})

readStream.on('end', function(chunk) {

	 console.log('------------------End-------------------');
})

