// ===============  functions with function parameters example ======================

// Basic example - function that accepts another function
function calculate(operation, a, b) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(add, 5, 3));      // Output: 8
console.log(calculate(multiply, 5, 3)); // Output: 15

// Using arrow functions directly
console.log(calculate((x, y) => x - y, 10, 4)); // Output: 6

// Array methods with function parameters
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]