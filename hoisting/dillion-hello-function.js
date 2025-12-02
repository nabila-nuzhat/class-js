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

// ======= function internal with return ==========================
}
printHello3();
// hello 3

// let outputDillion = printDillion3();
// console.log(outputDillion());


function printHello3() {
  console.log('hello 3')

  return function printDillion3() {
    console.log("dillion 3")
  }
}

// let outputDillion = printDillion3(); // ???????????????? issue ??????????????
// console.log(outputDillion);
// console.log(printDillion3());
