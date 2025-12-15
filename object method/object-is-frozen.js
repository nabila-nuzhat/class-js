// Object.isFrozen() --------------
const objectFreezeExm = {};
objectFreezeExm.key1 = 1;
objectFreezeExm.key2 = "Two";
objectFreezeExm.key3 = 4000;

console.log(objectFreezeExm);
console.log(Object.isFrozen(objectFreezeExm));


objectFreezeExm.key3 = 3333;
console.log(objectFreezeExm);
console.log(Object.isFrozen(objectFreezeExm));

Object.freeze(objectFreezeExm); 
console.log(objectFreezeExm);
console.log(Object.isFrozen(objectFreezeExm));
// delete objectFreezeExm.key3 // cannot be deletable
// console.log(objectFreezeExm);