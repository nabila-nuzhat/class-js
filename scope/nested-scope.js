var x = 10;

function outer() {
  var x = 20;

  function inner() {
    var x = 30;
    console.log(x); // Accesses x from the innermost scope (x = 30)
  }
console.log(x); // Accesses x from the outer scope (x = 20)
  inner();
//   console.log(x); // Accesses x from the outer scope (x = 20)
}

outer();
console.log(x); // Accesses x from the global scope (x = 10)