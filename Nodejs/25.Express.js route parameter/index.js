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

var students = {
	 1 : 'Mark',
	 2 : 'Tom' ,
	 3 : 'john', 
}
 
app.get('/contact', function(req, rep) {
      rep.send('this is home page');  
})

app.get('/students/:ic', function(req, rep) {
      rep.send('you have requested to see the student id : '+ req.params.id);  
})

app.listen(3000, function() {
    console.log('our server is live on port 3000');
})

