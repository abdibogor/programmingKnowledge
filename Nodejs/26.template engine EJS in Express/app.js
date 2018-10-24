var fs = require('fs');
var http = require('http');

   http.createServer(function (req, res) {
   console.log('requested url : ' + req.url);
    if (req.url === '/home' || req.url === '/'){
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	fs.createReadStrem('index.html')pipe(res);
  } else if (req.url === '/api' ){
	
  res.writeHead(200, {'Content-Type': 'application/json'});
  var jsonObj = {
	    name : 'max',
		surname : 'tesar',
		age = 26
  };
   res.end(json.stringify(jsonObj));
  } else if (req.url === '/about') {
   res.writeHead(200, { 'Content-Type': 'text/html' });
   fs.createReadStream('about.html').pipe(res);
  } else {
	  res.writeHead(404, { 'Content-Type': 'text/html' });
	  fs.createReadStream('404.html').pipe(res);
           }
}).listen(3000);

// Console will print the message
console.log("server is running on http://127.0.0.1:3000/")