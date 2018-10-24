var fs = require('fs');
var http = require('http');

var readStream = fs.createReadStream('file.txt', 'utf8');
var writeStream = fs.createWriteStream('write_file.txt');

/*
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
*/

const server = http.createServer((req, res) => {
  //Send the HTTP header
  //HTTP Status : 200 : OK
  //Content-Type', 'text/plain
  
  res.writeHead(200, {'Content-Type': 'application/json'});
  var jsonObj = {
	    name : 'max',
		surname : 'tesar',
		age = 26
  };
   res.end(json.stringify(jsonObj));
}).listen(3000);

// Console will print the message
console.log("server is running on http://127.0.0.1:3000/")