var http = require("http");

var foo = function(req, res){
    res.writeHead(200, {'Content-type' : 'text/plain'});
    //res.end("Hello Node\n")
}.listen(3000);

console.log("server is running on http://127.0.0.1:3000/")