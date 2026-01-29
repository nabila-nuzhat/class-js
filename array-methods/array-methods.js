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

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true






