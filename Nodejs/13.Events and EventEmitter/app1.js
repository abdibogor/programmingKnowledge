var events = require('events');
var util = require('util');

/*
var eventEmitter = new events.EventEmitter();
*/

var Students = function(name){
     this.name = name;
}

util.inherits(Students, events.EventEmitter);

var max = new Students('max');

max.on('scored', function() {
     console.log(max.name + ' scores '+ marks + ' marks);
})

max.emit('scored', 95);