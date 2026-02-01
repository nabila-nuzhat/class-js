// .push() = add  ==================
    // adds value from last 
let cars = ["lancer", "tesla", "jaguar"];

cars.push("dutson");
console.log(cars);

// .unshift () = add  ==================
    // adds value from beginning 

cars.unshift("volkswagen");
console.log(cars);

// .pop() = removes ===============
    // from last
let cars2 = ["prada", "tesla", "ford", "alien"];
console.log("cars2", cars2);

cars2.pop();
console.log(cars2);

// .shift() = removes ==================
    // from last
cars2.shift();
console.log(cars2);

// .at()
    // .at(index number) = arrayName[index]
let cars3 = ["lancer", "tesla", "bmw", "lamborgini"];

console.log("cars3",cars3);

console.log(cars3.at(3)); // lamborgini
console.log(cars3[3]); // lamborgini

// .concat() = adds 2 arrays ===================
    // array1.concat(array2)
    // = [...array1, ...array2] = spread operator

let roads = ["sharat", "shat mashjid", "mirpur", "shahjahan"];
const concatCarsRoad = cars.concat(roads);
console.log(concatCarsRoad);

let concatSpreadOperator = [...cars, ...roads];
console.log("concatSpreadOperator", concatSpreadOperator);

// // 3 arrays add ...
let nums = [0, 1, 2, 3, 4, 5];
const concat3ArraySpreadOpt = [...cars, ...roads, ...nums];
console.log("concat3ArraySpreadOpt", concat3ArraySpreadOpt);

const concat3Array = cars.concat(roads).concat(nums);
console.log("concat3Array", concat3Array);

// .slice() = cuts and picks slective values ===============================
    // arrayName.slice(starting point index, next index of target "ending" value);
    // Doesn't "modify" main-array

// ...
console.log(nums); // [ 0, 1, 2, 3, 4, 5 ]

const numSlice4 = nums.slice(0);
console.log("nums.slice(0) =", numSlice4); // = [ 0, 1, 2, 3, 4, 5 ]

// ...
const numSlice5 = nums.slice(2);
console.log("nums.slice(2) =", numSlice5);  // = [ 2, 3, 4, 5 ]

// ...
const numSlice1 = nums.slice(0,0); 
console.log("nums.slice(0,0) =",numSlice1); // = []

// ...
const numSlice2 = nums.slice(0,1); 
console.log("nums.slice(0,1) =", numSlice2); // = [ 0 ]

// ...
const numSlice3 = nums.slice(0,3); 
console.log("nums.slice(0,3) =", numSlice3); // = [ 0, 1, 2 ]

// ...
const numSlice6 = nums.slice(1, 5); 
console.log("nums.slice(1,5) =", numSlice6); // [ 1, 2, 3, 4 ]

// ...
const numSlice7 = nums.slice(1, 6); // [ 1, 2, 3, 4, 5 ] ??????
console.log("nums.slice(1,6) =", numSlice7); // 

// ...
const numSlice8 = nums.slice(4); 
console.log("nums.slice(4) =", numSlice8); // [ 4, 5 ]

// ...
const numSlice9 = nums.slice(5); 
console.log("nums.slice(5) =", numSlice9); // [ 5 ]

console.log("nums", nums);



// splice() = remove, add, in the "middle" of an "array" ======================
// toSpliced() = does not modify "original array"
    // array.splice(index starting point, quantity of values wannt to delete)
    // modifies "original source" array
    // can also replace 

const numsSplice1 = nums.splice(0, 1);
console.log(numsSplice1); // [ 0 ]
console.log("nums", nums); // nums [ 1, 2, 3, 4, 5 ]

const numsSplice2 = nums.splice(0,1); 
console.log(numsSplice2); // [ 1 ]
console.log("nums", nums); // nums [ 2, 3, 4, 5 ]

const numsSplice3 = nums.splice(1, 2); 
console.log("nums.splice(1, 2) =",numsSplice3); // [ 3, 4 ]
console.log("nums =", nums); // nums = [ 2, 5 ]


const numSplice4 = nums.splice(0, 1, 100, 55);
console.log("nums.splice(0, 1, 100, 55) =", numSplice4); // [ 2 ]
console.log("nums =", nums); // nums = [ 100, 55, 5 ]

// array.join() = converts array => string
    // () includes the blank space/ comma/ any symbol that comes in between the values of the array
    // array.join(" ") 
    // array.join(" , ") 
    // does NOT modify main array

const numsJoin = nums.join("");
console.log(numsJoin);
const numsJoin2 = nums.join(" ");
console.log(numsJoin2);
const numsJoin3 = nums.join(";");
console.log(numsJoin3);
const numsJoin4 = nums.join(" ; ");
console.log(numsJoin4);


// toString() = converts array => string
    // but Symbols of punctuation can NOT be changed

const numsString = nums.toString();
console.log(numsString);
console.log("nums", nums);


// sort() = sorts albhabetically 
// toSorted() = does not modify "original-array"
    // sorts "numbers" similar to letters, based on 2nd digits order as well
    // .sort(call back function): to sort "numbers" in / ascending / descending order
    // .sort((a, b)=> a-b )
    // modifies array
    // 
const numSort = nums.sort();
console.log("numSort", numSort);

const numSortCallBkFn11 = nums.sort((a,b)=> a-b);
console.log("numSortCallBkFn11", numSortCallBkFn11);

const nums2 = [11, 45, 33, 99, 100, 91]
const numSortCallBkFn = nums2.sort((a,b)=> a-b);
console.log("numSortCallBkFn", numSortCallBkFn);

    // strings ex 
const names= ["asma", "shamira", "nahid", "namira", "nbaira"];
console.log("names", names);
const nameSort = names.sort();
console.log("nameSort", nameSort);

// reverse() = sorts albhabetically / ascending / descending order

const numReverse = nums.reverse();
console.log("numReverse", numReverse);

console.log("names original array modified : after sort() applied: ", names);

const nameReverse = names.reverse();
console.log("nameReverse", nameReverse);

// method-chaining:
    // . chaining 
    // applying multiple methods by "." notation

const letters= ["ab",  "cf", "bg", "dg", "wth", "ef", ];
console.log('letters', letters);

const methodChaining = letters.sort().reverse();
console.log('methodChaining', methodChaining);


// .toLocaleString() -- later discuss

const array = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
    // Expected output: "1,a,12/21/1997, 2:12:00 PM",
    // This assumes "en" locale and UTC timezone - your results may vary


// with()
    // changes value by "index"
    // does not modify "original-array"
    // array.with(index, new value)

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]

// .keys()
 // converts to "object"

// fill()
    // The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.
    // array.fill(new value, start point, length)

const arrayFill = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(arrayFill.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(arrayFill.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(arrayFill.fill(6));
// Expected output: Array [6, 6, 6, 6]

console.log(Array(4).fill(0));
// Expected output: Array [ 0, 0, 0, 0 ]


// .isArray()
    // if array or not


// .every()
// .some() =>  opposdite concept 
    // returns false if it finds 1 element in the array that does not satisfy the provided testing function. Otherwise, it returns true.
    // has to be all true for true
    // returns "boolean" as o/p

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true

// ----------------------
// loop
// .for Each() ====
// .map() ====
    // .for Each(call back Fn, thisArg)
    // call back fn can accept up to 3 arguements
       // .for Each((index, value, array)=>{ })
    // cannot "return" anything
        // alternate to "return" anything = .map()
    // map() = .for Each() but "map()" can return anything inside "array" but "forEach()" cannnot
array1.forEach((value, index,array)=>{
    console.log(value, index, array);
    console.log(value * 10);
})
    // map() = .for Each()

const returnForEach = array1.forEach((value, index, array)=>{
    return value * 1000;
})

console.log("returnForEach", returnForEach); // returnForEach undefined

const returnMap = array1.map((value, index, array)=>{
    return value * 1000;
})

console.log("returnMAp", returnMap); // returnMAp [ 1000, 30000, 39000, 29000, 10000, 13000 ]

// ------------------
// .find()
    // returns "only 1st single value" that matches the "condition"
    // .filter() = .find() but filters & returns all matched value
const find = array1.find((value, index, array)=>{
    return value > 29;
})

console.log("array1:", array1); // array1: [ 1, 30, 39, 29, 10, 13 ]
console.log("find:", find); // find: 30

// ----------------
// .findLast()
    // returns "only Last single value" that matches the "condition"
const findLast = array1.findLast((value, index, array)=>{
    return value > 29;
})

console.log("array1:", array1); // array1: [ 1, 30, 39, 29, 10, 13 ]
console.log("find last:", findLast); // find: 39

// -------------
// .filter()
    // filter() = .find() but filters & returns all matched value
const filter = array1.filter((value, index, array)=>{
    return value >= 29;
})

console.log("array1:", array1); // array1: [ 1, 30, 39, 29, 10, 13 ]
console.log("filter:", filter);


// -----------------------------------------------
// .findIndex()
    // returns "only 1st index" of value that matches the "condition"
const findIndex = array1.findIndex((value, index, array)=>{
    return value > 29; 
})

console.log("array1:", array1); // array1: [ 1, 30, 39, 29, 10, 13 ]
console.log("find Index:", findIndex); // find Index: 1

// ------------------------------------------
// .findLastIndex()
    // returns "only Last index" of value that matches the "condition"
const findLastIndex = array1.findLastIndex((value, index, array)=>{
    return value > 29;
})

console.log("array1:", array1); // array1: [ 1, 30, 39, 29, 10, 13 ]
console.log("find last Index:", findLastIndex); // find last Index: 2


// ------------------
// .indexOf()
    // returns "-1" if the value is not presnt in array 

const indexOf = array1.indexOf(10);
console.log("array1:", array1); // array1: [ 1, 30, 39, 29, 10, 13 ]
console.log("Index Of:", indexOf); // Index Of 4


// ------------------
// .includes()
    // returns boolean answer

const includes = array1.includes(10);
const includes2 = array1.includes(40);
console.log("array1:", array1); // array1: [ 1, 30, 39, 29, 10, 13 ]
console.log("includes:", includes,",",includes2); //


// ------------------
// .flat() / .flat(depth)

    // turns nested arrays in one single array
    // does not modify main array
    // .flat(depth of array) : depth = the level of nested arrays to which the nested arrays will break into 1 array 
        // .flat() = .flat(1)
        // eg. .flat(1) /  .flat(2) /  .flat(infinity)
        // .flat(infinity) : if want to breakdown to the last of nested array or do not know the last definite depth


const nestedArrayFlat = [1, 6, 7, 9, 3, [2, 24, [300, 98, [111, 222, 55]]]]

console.log("main array:", nestedArrayFlat);

const nestedFlat = nestedArrayFlat.flat(); 
console.log("nestedFlat :", nestedFlat); // 1st level of array

const nestedFlat1 = nestedArrayFlat.flat(1); 
console.log("nestedFlat1 :", nestedFlat1); // 1st level of array

const nestedFlat2 = nestedArrayFlat.flat(2); 
console.log("nestedFlat2 :", nestedFlat2); // 2nd level of array

console.log("main array:", nestedArrayFlat);

const nestedFlatInfinity = nestedArrayFlat.flat(Infinity); 
console.log("nestedFlatInfinity :", nestedFlatInfinity); // last level of array


// -------------
// .flatMap()
    // The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, 
    // and then flattening the result by one level. 
    // identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
    // Parameters
    // callbackFn
    // A function to execute for each element in the array. It should return an array containing new elements of the new array, or a single non-array value to be added to the new array. The function is called with the following arguments:

    // element
    // The current element being processed in the array.

    // index
    // The index of the current element being processed in the array.

    // array
    // The array flatMap() was called upon.

    // thisArg Optional
    // A value to use as this when executing callbackFn. See iterative methods.

const arrFlatMap = [1, 2, 1];

const result = arr.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
console.log(arrFlatMap);

// Expected output: Array [1, 2, 2, 1]



// -----------
// .reduce()
    // returns "single" value
    // syntax type-1: array.reduce((previous-Value, current-value, index, array)=> {})

    // syntax type-2: array.reduce((previous-Value, current-value, index, array)=> {previous-Value + current-value, initial-value})
        // initial-value = a fixed value that adds up "as previous-Value"
        // method chaining possible
        // = also called accumulator


const nestedArrayReduce = [1, 6, 7, 9, [2, 24]];

const reduce = nestedArrayReduce.reduce((prevValue, cuurentValue, index, array)=> prevValue + cuurentValue)

console.log("reduce", reduce); // 262,24

    // method chaining with .flat()
const reduce2 = nestedArrayReduce.flat().reduce((prevValue, cuurentValue, index, array)=> prevValue + cuurentValue)

    // with initial value
console.log("reduce2 :", reduce2); // 49
const reduceInitialValueAdd = nestedArrayReduce.flat().reduce((prevValue, cuurentValue, index, array)=> prevValue + cuurentValue, 100)

console.log("reduceInitialValueAdd :", reduceInitialValueAdd); // 149


// ----
// reduceRight()
    // starts from right to left