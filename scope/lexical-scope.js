// lexical scope ==================
/* Lexical Scope (Static Scope) হলো JavaScript-এর scope নির্ধারণ করার নিয়ম, যেখানে একটি function বা variable-এর accessibility তার declaration location দ্বারা নির্ধারিত হয়, ??? না যে function কোথা থেকে call হচ্ছে তার দ্বারা।​

Key Points:​

Scope compile time-এ ঠিক হয়, runtime-এ না।​

Outer function-এর variables inner function access করতে পারে।​

Inner function-এর variables outer function access করতে পারে না।​ */
var a = "I'm global";

function firstFunction() {
  // var a = "I'm in firstFunction";
  var a = "I'm in firstFunction";

  function secondFunction() {
    console.log(a); // Accesses a from firstFunction, not the global a
  }

  secondFunction();
}

firstFunction();

// with Let ===================
let b = "I'm global LET";

function firstFunctionLet() {
  let b = "I'm in firstFunctionLet LET";

  function secondFunctionLet() {
    console.log(b); // Accesses a from firstFunctionLet, not the global b
  }

  secondFunctionLet();
}

firstFunctionLet();