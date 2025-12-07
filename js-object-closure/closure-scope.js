function outerFunction() {
  var outerVariable = "I'm in outerFunction";
return innerFunction; // Returns Same o/p = I'm in outerFunction
  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable from the outer scope
  }

  // return innerFunction; // Returns Same o/p = I'm in outerFunction
}

console.log(outerFunction());
// outerFunction();
var closure = outerFunction();
closure(); // This still has access to outerVariable