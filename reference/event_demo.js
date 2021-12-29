const EventEmitter =  require('events');


//Class
class MyEmitter extends EventEmitter{

}


//Init object
const myEmitter = new MyEmitter();


//event listener
myEmitter.on('event',()=> console.log('event fired'));

myEmitter.emit('event');

