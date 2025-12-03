// lexical scope ==================
var a = "I'm global";

function firstFunction() {
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
    console.log(b); // Accesses a from firstFunction, not the global a
  }

  secondFunctionLet();
}

firstFunctionLet();