class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greeting(){
        console.log(`MY name is ${this.name} and my age is ${this.age}`);
    }
}

// module.exports = Person

// const Person = require('./person')


const person1 = new Person('shdb', 22)

person1.greeting()