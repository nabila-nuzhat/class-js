// Constructor Function  :  
// Creating new object way

/**
 * For creating multiple objects of the same "type"
 *  or blueprint, a constructor function can be used with the "new" keyword.
 */

// Main Example ----------------------------------
function Person(first, last, age) {
  this.firstName = first; // this.object-property-name = function parameter
  this.lastName = last;
  this.age = age;
}
const person1 = new Person("John", "Doe", 50); // const object variable-name = new Constructor-function-Name(Parameters values)

console.log(person1);


// my example Constructor Function ------------------------
// SUV Constructor Function example
function SUV (type, brand, model, color, engine){
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this["Engine Type"] = engine;
}

const compactSUV1 = new SUV("Compact SUV", "Honda", "Jazz", "grey", " 1.5L engine;  122hp");

const familySUV1 = new SUV("Family-Oriented", "Ford", "Everest", "black", "2.0L Turbo Diesel and powerful 3.0L V6 Turbo Diesel engines.");

const smallSUV1 = new SUV("Small SUV", "Mazda", "CX-3", "red", "Mazda's  SkyActiv-G 2.0L 4-cylinder; power: 148-154 hp)")

console.log(compactSUV1);
console.log(familySUV1);
console.log(smallSUV1);

