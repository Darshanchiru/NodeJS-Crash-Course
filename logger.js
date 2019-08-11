const EventEmitter = require('events');
const uuid = require('uuid');

// create class
class Logger extends EventEmitter{
    log(msg){
        // Call back function
        this.emit('message',{
            id : uuid.v4(), msg
        })
    }
}

module.exports = Logger;

