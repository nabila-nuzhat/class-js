// Object.seal()
// Object.isSealed()

/**
 *  static method
 *  New properties cannot be added, 
 *  Existing properties cannot be removed.
 *  their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned.
 *  Values of existing properties can still be changed as long as they are writable.
 *  seal() returns the same object that was passed in.
 * 
 */


//-----------------------------------------------------------------------------------------
// "use strict"; 
// // on "strict mode gives error:"
const objectSeal = {};
objectSeal.key1 = 1;
objectSeal.key2 = "Two";
objectSeal.key3 = 4000;

console.log(objectSeal);

objectSeal.key3 = 3333;
console.log(objectSeal);
console.log(Object.isSealed(objectSeal));
objectSeal.key4444 = "FOOOOuuurrrr";
console.log(objectSeal);


Object.seal(objectSeal); 
console.log(objectSeal);

console.log(Object.isSealed(objectSeal));

objectSeal.key3 = "THREEEEE"; // value changable
console.log(objectSeal);

delete objectSeal.key3;
console.log(objectSeal); // cannot be deleted

objectSeal.key44 = "crazy 4!" // new property cannont be added
console.log(objectSeal);




