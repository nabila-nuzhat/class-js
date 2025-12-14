// Object.create(object name) method :  
// Creating new object way

/**
 * creates a new object using an existing object as the prototype of the new object, 
 * useful for implementing prototypal inheritance.
 * 
 * 
 * Here greet()
 * class method: greet(): In object-oriented programming with JavaScript classes, greet() is often used as a method of the class. 
 * 
 * object method: greet(): A function can also be defined as a method within an object, using the this keyword to access other properties of that object. 
 */

const personPrototype = {
  greet() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  }
};

const person2 = Object.create(personPrototype); // creating person2 object
person2.firstName = "Jane"; 
person2.lastName = "Smith";
person2.greet(); // ?? what does this mean?


// // MY Testing: different output ------------------
console.log(personPrototype); // { greet: [Function: greet] }
console.log(person2); // person2 object

const protoTypeVariable = personPrototype;
console.log(protoTypeVariable);