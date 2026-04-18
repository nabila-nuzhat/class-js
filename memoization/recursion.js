function factorial(n) {
  // 1. Base Case: stop at 1
  if (n <= 1) return 1; 
  // 2. Recursive Case: n * (n-1)!
  return n * factorial(n - 1); 
}
console.log(factorial(5)); // Output: 120

// fibbonaccie
const fib = (n) => {
     if (n <= 1) return 1; 
     return fib(n-1) + fib(n-2);
};
console.log(fib(0)); // 1 -->  if (n <= 1) return 1; 
console.log(fib(1)); // 1 -->  if (n <= 1) return 1; 
console.log(fib(2)); // 2
console.log(fib(3)); // 3
console.log(fib(4)); // 5
console.log(fib(5)); // 8


// Recursion in js: -------------------------------
// Recursion is a programming technique in JavaScript where a function calls itself to solve a problem by breaking it down into smaller, identical sub-problems. It is often an elegant alternative to iterative loops (for/while) when working with complex data structures like trees or nested objects. 
// GeeksforGeeks
// GeeksforGeeks
//  +3
// 1. Essential Components of Recursion
// Every recursive function must have two primary parts to work correctly: 
// Base Case: The "stopping condition" that returns a value without making further recursive calls. Without this, the function would call itself infinitely, leading to a "Maximum call stack size exceeded" error.
// Recursive Case: The part of the function where it calls itself, typically with a modified (smaller) input to move closer to the base case. 
// freeCodeCamp
// freeCodeCamp
//  +5
// Basic Example: Factorial
// The factorial of n(n!) is n X (n-1) X ...... X 1

// . 
// javascript
// function factorial(n) {
//   // 1. Base Case: stop at 1
//   if (n <= 1) return 1; 
//   // 2. Recursive Case: n * (n-1)!
//   return n * factorial(n - 1); 
// }
// console.log(factorial(5)); // Output: 120
// 2. How it Works: The Call Stack
// JavaScript uses a Call Stack to manage function execution. When a recursive call is made: 
// The current function's state is "paused" and saved on the stack.
// A new "frame" for the nested call is added to the top of the stack.
// This repeats until the base case is reached.
// Once the base case returns a value, the stack "unwinds," resolving each paused function in a Last-In-First-Out (LIFO) order. 
// DEV Community
// DEV Community
//  +4
// 3. Key Use Cases in JavaScript
// Recursion shines in scenarios where data is hierarchical or of unknown depth: 
// Tree Traversal: Ideal for navigating the DOM (Document Object Model) or file system directories.
// Deep Cloning: Used to copy complex objects that contain nested objects or arrays.
// Divide and Conquer: Powering algorithms like Merge Sort or Quick Sort.
// Backtracking: Solving puzzles like mazes or Sudoku by exploring paths and stepping back when a dead end is reached. 
// GeeksforGeeks
// GeeksforGeeks
//  +5
// 4. Recursion vs. Iteration
// Feature 	Recursion	Iteration (Loops)
// Readability	Often more elegant and clean for complex structures.	Clearer for simple, linear tasks.
// Performance	Slower due to function call overhead.	Faster; interacts directly with the processor.
// Memory	Uses more memory because of the call stack.	Uses constant memory by updating variables.
// Risk	Can cause "Stack Overflow" if too deep.	Can cause infinite loops if exit condition isn't met.
// 5. Advanced Optimization: Tail Recursion
// Tail Recursion occurs when the recursive call is the very last action in the function. In theory, this allows for Tail Call Optimization (TCO), where the engine reuses the same stack frame to save memory. 
// GeeksforGeeks
// GeeksforGeeks
//  +3
// Note: While ES6 specified TCO, it is currently only fully supported in the Safari browser (JavaScriptCore engine)