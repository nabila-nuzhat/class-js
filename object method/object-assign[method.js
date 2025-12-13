//main exmple =======================
// assign() method : static

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true


// my example ==============================
const targetObject = {a : 25, b: 40, c: 82};
const sourceObject = {c : 35, d: 100 };

let newTargetObject = Object.assign(targetObject, sourceObject);

console.log(targetObject);
console.log(newTargetObject == targetObject);


// example 3 =================
let directWrittenObject = Object.assign({}, {ab : 10, bg: "red"});
console.log(directWrittenObject);

let directWrittenObject22 = Object.assign({serial : 100, zindex: 999}, {});
console.log(directWrittenObject22);




