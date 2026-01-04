// iterator of object, array
let names = ["mr. avb", "ms pc"];
const check = names.entries();

console.log(check); // Object [Array Iterator] {}
const valueCheck = names.values(); // ?????? in the video output??????????????????
console.log(valueCheck);
console.log(check.next()); // { value: [ 0, 'mr. avb' ], done: false }
console.log(check.next().value); // [ 1, 'ms pc' ]


