const path=require('path');

console.log(__filename);
//Base filename
console.log(path.basename(__filename));

//Direcroty name
console.log(path.dirname(__filename));

//Filename extension
console.log(path.extname(__filename));

//Create path Object
console.log(path.parse(__filename));


//Concatenate Path
console.log(path.join(__dirname,"test","hello.html"))