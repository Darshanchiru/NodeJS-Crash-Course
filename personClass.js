// module wrapper function 
// function(exports,require,module,__filename,__dirname)
// {

// }
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log('my name is'+this.name+' age is '+this.age);
    }
}

module.exports= Person;