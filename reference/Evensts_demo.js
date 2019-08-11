const EventEmitter = require('events');

//  Create class

class MyEmitter extends EventEmitter{}

//init Object
const myEmitter=new MyEmitter();

// event listener
myEmitter.on('event',()=>
console.log("Event Fired !"));

//init event
myEmitter.emit('event');