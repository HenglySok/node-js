const EventEmitter = require('events');
const emitter = new EventEmitter();

//register a listener
emitter.on('messageLogged', function(){
    console.log("listener called");         
});

//Raise and event
emitter.emit("messageLogged");