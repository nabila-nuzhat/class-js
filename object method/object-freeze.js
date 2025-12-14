//Object.freeze() method 
/**
 *  static method
 *  A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned
 * freeze() returns the same object that was passed in.
 */


//-----------------------------------------------------------------------------------------
// "use strict"; 
// // on "strict mode gives error:" // TypeError: Cannot assign to read only property 'key3' of object '#<Object>'
const objectFreezeExm = {};
objectFreezeExm.key1 = 1;
objectFreezeExm.key2 = "Two";
objectFreezeExm.key3 = 4000;

console.log(objectFreezeExm);

objectFreezeExm.key3 = 3333;
console.log(objectFreezeExm);

Object.freeze(objectFreezeExm); 
console.log(objectFreezeExm);
objectFreezeExm.key3 = "THREEEEE";
console.log(objectFreezeExm);






