var http = require("http");

http.createServer(function(req, res){
	var body = 'this is the body of response';
	var content-length = body.length;
    res.writeHead(200, {
		'Content-type' : 'text/plain',
		'Content-length' : content_length
		});
    //res.end("Hello Node\n")
	   res.end(body);
      }).listen(3000);

console.log("server is running on http://127.0.0.1:3000/")