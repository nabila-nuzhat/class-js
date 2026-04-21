// How to Create a Set with a Value
const ids = new Set([3, 9, 6, 7, 3, 3]);
console.log(ids); // Set(4) {3, 9, 6, 7}
// // here, in ouput bcz Set shows only the list of Unique values.
// even though in the created Set, inputted
// three "3"

ids.add(5);
console.log(ids); // Set(5) {3, 9, 6, 7, 5}

// ids.clear();
// console.log(ids); // Set(0) {size: 0}

console.log(ids.has(3)); // true

console.log(ids.entries()); // SetIterator {3 => 3, 9 => 9, 6 => 6, 7 => 7, 5 => 5} // // here bcz Set doniot have "keys"

console.log(ids.entries().next()); // {value: Array(2), done: false}

console.log(ids.entries().next().value); // (2) [3, 3]
console.log(ids.entries().next()); // ????? {value: Array(2), done: false}
console.log(ids.entries().next().value); //  ???? (2) [3, 3]
console.log(ids.entries().next().value); //  ???? (2) [3, 3]
console.log(ids.entries().next().value[0]); //  3


// loop in Set ------------------------------------
const fruits = new Set(["apple", "mango", "apple", "bangi"]);
for( const fruit of fruits.entries()){
    console.log(fruit);
    
    // o/p
// (2) ['apple', 'apple']
 // (2) ['mango', 'mango']
 // (2) ['bangi', 'bangi']

     console.log(fruit[0]); 
     // apple
     // mango
     // bangi
}