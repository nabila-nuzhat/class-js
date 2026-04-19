
// memoization implemeted on fibonacci concept
let memo = {};
const fib = (n) => {
    console.log(n); 
    console.log(memo);

    if (memo[n]) return memo[n];
    if (n <= 1) return 1;

    return memo[n] = fib(n-1) + fib(n-2);
};

// console.log(fib(50)); // 20365011074


// concept --------------------------------------

// The memo object is stored in memory (RAM) within the global execution context of the page.

// Between clicks:

// The memo variable persists because it's declared at the script's top-level scope (global scope)

// When the first click finishes executing, the fib function's execution context is popped off the call stack, but the global memo object remains in memory because nothing destroys it

// Subsequent clicks access the same global memo object reference that never left memory after the first execution

// The object lives until:

// The page is refreshed/reloaded

// The browser tab is closed

// Garbage collection would only remove it if no references existed, but the global memo reference persists

// Two-step process:

// First click - The series gets stored into the memo object (as properties like memo[2], memo[3], etc.)

// The memo object itself is already stored in memory (RAM) within the global execution context before any clicks happen - it exists as an empty object {} as soon as the script loads

// So the sequence is:

// text
// Script loads → Global execution context created → memo = {} allocated in RAM
//                                                            ↓
// First click → fib runs → Values written INTO memo object (same RAM location)
//                                                            ↓
// Between clicks → memo object (with values) stays in that same RAM location
//                                                            ↓
// Second click → fib reads FROM that same memo object in RAM
// The key: The memo object doesn't move or get re-created between clicks. It's a single, persistent object in a fixed location in heap memory, referenced by the global variable memo.

