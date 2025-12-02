// ==== Main Hoisting example ============================
// printHello()
// // hello

// printDillion()
// // ReferenceError: printDillion is not defined

// function printHello() {
//   console.log('hello')

//   function printDillion() {
//     console.log("dillion")
//   }
// }

// ======= function chaining ==============================
printHello2()();
// hello 2 Function Chaining
// dillion 2 Function Chaining

function printHello2() {
  console.log('hello 2 Function Chaining')

  return function printDillion2() {
    console.log("dillion 2 Function Chaining")
  }
}

printHello22();
// hello 2 Function Chaining
// bcz printDillion22() is not called or returned

function printHello22() {
  console.log('hello2-2 Function Chaining')

  function printDillion22() {
    console.log("dillion2-2 Function Chaining")
  }
}

// ======= function internal with return ==========================
printHello3();
// hello 3 --------------1 

// printDillion3() is returned inside printHello3 and needed to store in a variable 
function printHello3() {
  console.log('hello 3')

  return function printDillion3() {
    console.log("dillion 3")
  }
}

console.log(printHello3()); // hello3----- 2, [Function: printDillion3]

let outputHelloDillion3 = printHello3();
console.log(outputHelloDillion3); //hello3------ 3, [Function: printDillion3]
outputHelloDillion3(); // dillion 3 (bcz output of of [Function: printDillion3] )

// final output sequence:
// hello 3, hello 3, [Function: printDillion3], hello 3, [Function: printDillion3], dillion 3

