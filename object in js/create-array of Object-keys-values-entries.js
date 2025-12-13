/**
 * Object.keys(objectName);
 * Object.values(objectName);
 * Object.entries(objectName);
 * flat : arrayname.flat();
 */

const objectName = {
    key1 : "value 1",
    key2 : 2,
    key3 : "value 3",
    "key 4" : "value 4"
}

let array1 = Object.keys(objectName);
let array2 = Object.values(objectName);
let array3 = Object.entries(objectName);

console.log(array1);
console.log(array2);
console.log("Array 3: \n",array3);
console.log("array.flat() \n",array3.flat());// flat makes the nested array into 1 full array


