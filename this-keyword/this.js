// "use strict"; // o/p this alone {}, undefined
// ===========================================
console.log("this alone",this);// Node.js -> this alone {},
// browser --> window object
//=========================================
//=========================================
function saySomething() {
  console.log(this)
  console.log('this in a function', this);
}

saySomething()

//==================================================
//==================================================

const person = {key1 : "name", greet: function(){
  console.log(this.key1); //name (bc "this" is also the parent object, that's why can access the property of the object using "this.key1")
  console.log(this); // { a: 'name', greet: [Function: greet] }

}}

person.greet();
console.log(person); //{ a: 'name', greet: [Function: greet] }
//==================================================

// Main example ==================================
const person2 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getThis : function() {
      return this ;
      // return this + "\n" + this.firstName + " " + this.lastName;
      
    }
};

console.log('this in object method\n', person2.getThis()); 

// o/p of : return this + "\n" + this.firstName + " " + this.lastName;
// this in object method
 //[object Object]
 //John Doe
