// object, array are copied as reference in heap memory. copied version ref === main version ref. 
// value inside copied version also changes with the changes in the main

// non - proper way=======================
let celeb = {name: "shahrukh", age: 34};
let copyCeleb = celeb;
console.log(copyCeleb); // { name: 'shahrukh', age: 34 }
celeb.age = 56;
console.log("copyCeleb:", copyCeleb); // copyCeleb { name: 'shahrukh', age: 56 }
console.log(celeb === copyCeleb); // true
console.log("celeb Org:",celeb); // celeb Org: { name: 'shahrukh', age: 56 }
// --------------------------------
// proper way to copy array & object: using Spread Operator {...variabe-name of} [...variabe-name of]
// "shallow copy/ 1st level copy "=======================================
let celeb2 = {name: "Salman Shah", age: 40};
let copyCeleb2 = {...celeb2}; // spread operator. stored as different reference.
console.log(copyCeleb2); // { name: 'Salman Shah', age: 40 }

celeb2.age = 39;
console.log(copyCeleb2); // { name: 'Salman Shah', age: 40 }
console.log(celeb2 === copyCeleb2); // false
console.log("celeb2:", celeb2); // celeb2: { name: 'Salman Shah', age: 39 }

//-----------------------------
// shallow copy: array inside object // only copies main(1st level) object/array but does not copy in multilevel of the nested objects/array inside the parent object/array =======================================
let celeb3 = {name: "sabbir Mir", age: 40, cars:["bmw", "ferrari", "tesla"]};
let copyCeleb3 = {...celeb3}; // spread operator. stored as different reference.
console.log(copyCeleb3); // { name: 'sabbir Mir', age: 40, cars: [ 'bmw', 'ferrari', 'tesla' ] }

celeb3.age = 66;
celeb3.cars[2] = "mercedes benz"; 

console.log("celeb3", celeb3);
/* o/p: celeb3 { name: 'sabbir Mir', age: 66, cars: [ 'bmw', 'ferrari', 'mercedes benz' ]} */

console.log("copyCeleb3", copyCeleb3);
/* copyCeleb3 { name: 'sabbir Mir', age: 40, cars: [ 'bmw', 'ferrari', 'mercedes benz' ]} */
console.log(celeb3 === copyCeleb3); // false

// -----------------------------
// Copy Nested Objext/array that is inside the parent Object/array : using JSON.stringfy(object-name)  =============================================

let celeb4 = {name: "Shabnoor Shahnaz", age: 33, cars:["Lancer", "ferrari", "tesla"]};
let copyCeleb4 = JSON.stringify(celeb4); // JSON.stringfy(object-name)  for copying nested objects/array

console.log(copyCeleb4); // {"name":"Shabnoor Shahnaz","age":33,"cars":["Lancer","ferrari","tesla"]}

celeb4.age = 70;
celeb4.cars[2] = "Noah";

console.log("celeb4", celeb4);
/* o/p : celeb4 {
  name: 'Shabnoor Shahnaz',
  age: 70,
  cars: [ 'Lancer', 'ferrari', 'Noah' ]
} */
console.log("copyCeleb4", copyCeleb4); // copyCeleb4 {"name":"Shabnoor Shahnaz","age":33,"cars":["Lancer","ferrari","tesla"]} , still in JSON format as copied 
console.log(celeb4 === copyCeleb4); // false


// Deep copy: for converting the Stringfied object into  Object again using "JSON.parse(target object-name)" ==============================================
let celeb5 = {name: "Joya Ahsan", age: 33, cars:["Lancer", "ferrari", "tesla"]};
let copyCeleb5 = JSON.stringify(celeb5);
 // JSON.stringfy(object-name)  for copying nested objects/array
console.log(copyCeleb5); // {"name":"Joya Ahsan","age":33,"cars":["Lancer","ferrari","tesla"]}

let objectCopyCeleb5 = JSON.parse(copyCeleb5); // convert the stringfied object to main object 
console.log("objectCopyCeleb5 parsed:", objectCopyCeleb5);
/* o/p: objectCopyCeleb5 parsed: { name: 'Joya Ahsan', age: 33, cars: [ 'Lancer', 'ferrari', 'tesla' ] } */
celeb5.age = 68;
celeb5.cars[2] = "Rolse Royalce";

console.log("celeb5", celeb5);
    /* o/p: celeb5 {
  name: 'Joya Ahsan',
  age: 68,
  cars: [ 'Lancer', 'ferrari', 'Rolse Royalce' ]
} */
console.log("copyCeleb5", copyCeleb5); 
// o/p: copyCeleb5 {"name":"Joya Ahsan","age":33,"cars":["Lancer","ferrari","tesla"]}
console.log("objectCopyCeleb5", objectCopyCeleb5);
// o/p: objectCopyCeleb5 { name: 'Joya Ahsan', age: 33, cars: [ 'Lancer', 'ferrari', 'tesla' ] }
console.log(celeb5 === copyCeleb5); // false
