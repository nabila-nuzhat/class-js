let a = 11;
let b = a;
a = 20;
console.log(b); // 11, bcz primitive data type's value is saved in "stack memory". Change in "a" variable value will not change value of "b" variable
