// scope chaining- bubbling happens
// with var ==============================
var globalVariable = "I'm global";

function outerFunction() {
  var outerVariable = "I'm in outer scope";

  function innerFunction() {
    var innerVariable = "I'm in inner scope";
    console.log(innerVariable); // Access innerVariable
    console.log(outerVariable); // Access outerVariable
    console.log(globalVariable); // Access globalVariable
  }

  innerFunction();
}
outerFunction();
// with Let =======================

let globalVariableLet = "I'm global LET";

function outerFunctionLet() {
  let outerVariableLet = "I'm in outer scope LET";

  function innerFunctionLet() {
    let innerVariableLet = "I'm in inner scope LET";
    console.log(innerVariableLet); // Access innerVariable
    console.log(outerVariableLet); // Access outerVariable
    console.log(globalVariableLet); // Access globalVariable
  }

  innerFunctionLet();
}

outerFunctionLet();


// small example===============
let a = 15;
function b(){
    let a = 20;
    console.log(a); // 20 , bcz it gets the inner a 1st as per blockchaining
}

b();