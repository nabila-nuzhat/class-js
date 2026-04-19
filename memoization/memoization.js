// https://www.freecodecamp.org/news/memoization-in-javascript-and-react/
// memoization implemeted on fibonacci concept
const fib = (n, memo) => {
    memo = memo || {}

    if (memo[n]) return memo[n]

    if (n <= 1) return 1
    return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}

console.log(fib(50)); // 20365011074

//---------------------------------------- without memo----------
// // below code will take long time for not having memoization
// const fib = (n) => {
//     memo = {};

//     if (memo[n]) return memo[n];

//     if (n <= 1) return 1;
//     return memo[n] = fib(n-1) + fib(n-2)
// }

// console.log(fib(50));
