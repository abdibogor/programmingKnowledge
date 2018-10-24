var express = require ('express');

var app = express();
// GET
// POST
// PUT
// DELETE

app.get('/', function(req, rep) {
      rep.send('this is home page');  
})

app.get('/about', function(req, rep) {
      rep.send('this is home page');  
})

app.get('/contact', function(req, rep) {
      rep.send('this is home page');  
})

app.listen(3000, function() {
    console.log('our server is live on port 3000');
})

