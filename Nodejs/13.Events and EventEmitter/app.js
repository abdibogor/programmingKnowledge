var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on();

eventEmitter.on('clicked', function(button) {
      	console.log('button + ' is clicked'); 
});

eventEmitter.emit('clicked', 'button 1');
