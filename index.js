//  const person = require('./person');
// console.log(person);

// const Person= require('./personClass');

// const p1=new Person("darshan",45);

// p1.display();

import Logger from './logger';

const logger = new Logger();

logger.on('message',data => console.log("Called Listener",data));

logger.log("hello");