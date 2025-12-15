/** optional operator chaining ?. =======================
 * X X X DOES NOT guarantees check the existance of the property.
 * checks if the "property is defined or not without risk of throwing ERROR, in case the object is not DEFINED.
 * 
 */
const car = {brand: "Fiat", model: 500, color: "red", "Engine Type": "jsdhjsbdj jshJDHJ"};
console.log(car.license); // checks if the "property is defined or not. DOES NOT guarantees check the existance of the property XX"
let car22;

console.log(car["Engine Type"]);
console.log(car?.license);
console.log(car22?.license);
console.log(car22.license); //TypeError: Cannot read properties of undefined (reading 'license')
