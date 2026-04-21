const myMapConvertArray = new Map();
myMapConvertArray.set("a", 1);
myMapConvertArray.set("b", 2);
myMapConvertArray.set(undefined, undefined);

//// convert to array way 1 -----------
const array =[...myMapConvertArray]; 
console.log(array);

//// convert to array way 2 -----------
const myMapConvertArrayTwo = new Map();
myMapConvertArrayTwo.set("xy", 11);
myMapConvertArrayTwo.set("PQ", 22);
myMapConvertArrayTwo.set(undefined, undefined);

const array2 = Array.from(myMapConvertArrayTwo);
console.log(myMapConvertArrayTwo);
console.log(array2);
// o/p:
    // (3) [Array(2), Array(2), Array(2)]
    // 0: (2) ['xy', 11]
    // 1: (2) ['PQ', 22]
    // 2: (2) [undefined, undefined]
    // length: 3
    // [[Prototype]]: Array(0)

// // .flat() converts to single array ---
    const array2FlatSingleArray = Array.from(myMapConvertArrayTwo).flat();

    console.log(array2FlatSingleArray); // (6) ['xy', 11, 'PQ', 22, undefined, undefined]

// convert Map to Object ------------------
const mapToObj = Object.fromEntries(myMapConvertArrayTwo);
console.log(mapToObj); // {xy: 11, PQ: 22, undefined: undefined}
