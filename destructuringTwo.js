let age = 55;


let person = {firstName : "ab", lastName: "dilond", age: 23};
let {firstName, lastName, age:personAge} = person; // personAge = is an Alias (another name for the same thing key) of the key-name "age" of the object "person" for avoiding conflict with the global variable "age" on the top. & an alternate name for "destructuring" the object without cahningin the actual keyname "age" of the "person" object.

console.log(firstName); // same as person.firstName
console.log(lastName); // same as person.lastName
console.log(personAge); // 23 = age key-name's value after using the "binding identifier (alias)" "personAge" = 23
console.log(person.age); // person.age = personAge = 23
console.log(age); //  global object = 55


// example with default  value while destructuring ===============================

let person2 = {firstName : "PC", lastName: "Jonas", age: 43};
let {firstName:firstNm, lastName:lastNm, age:personAG, cars = ["lancer beast"]} = person2; 


console.log(firstNm);
console.log(lastNm);
console.log(personAG);
console.log(cars); // the added default  value while destructuring