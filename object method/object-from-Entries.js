// Object.fromEntries() ---------
/**
 * convert list of key:value pairs of Array into one Objhect
 */

const arrayFromFreeze = [
    ["karim", 29], ["shovon", 31], ["iliyas", 23]
];

console.log(Object.fromEntries(arrayFromFreeze));

// ---------------------------------------------------------------
// const arrayFromFreeze22 = [1, 2, 3, 4];
// console.log(Object.fromEntries(arrayFromFreeze22)); 

// TypeError: Iterator value 1 is not an entry object
//     at Function.fromEntries (<anonymous>)
//     at Object.<anonymous></anonymous> 
//---------------------------------------------------------------
//---------------------------------------------------------------
// const arrayFromFreeze33 = ["A", "b", 3, 4]; 
// console.log(Object.fromEntries(arrayFromFreeze33)); // TypeError: Iterator value A is not an entry object
//---------------------------------------------------------------
//---------------------------------------------------------------
// const arrayFromFreeze44 = ["cd", "b", 3, 4]; 
// console.log(Object.fromEntries(arrayFromFreeze44)); // TypeError: Iterator value cd is not an entry object
//---------------------------------------------------------------