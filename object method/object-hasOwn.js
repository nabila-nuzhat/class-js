/** Object.hasOwn()
 * The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false
 */

const car = {brand:"Fiat", model:"500", color:"white"};

console.log(Object.hasOwn(car, "Engine Type"));
;
console.log(Object.hasOwn(car, "model"));