var fs = require('fs')

//fs.unlink('test.txt');

/*
fs.mkdirSync('node', function(){
           fs.writeFile('./node/mynode.txt', "abcdefjghikjglmnopqrstuvwxyz");
});
*/

fs.unlink('./node/mynode.txt', function() {
       fs.rmdir('node');     
});



