// Main Example (advanced) =================================
function createCounter() {
  var count = 0;
  return { // returns object (advanced)
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
}

var counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Accesses the count variable via closures

// ====================================== 
// small example 1
// let count = 0;
// function outer (){
//   count++;
//   console.log(count);
// }

// outer();
// outer();
// outer();

// ====================================== 
// small example 2
// let count2 = 0;
// function outer2 (){
//   count2++;
//   console.log(count2);
// }

// outer2();
// count2 += 10;
// outer2();
// outer2();

// ====================================== 
// small example 3

// function outer3 (){
//   let count3 = 0;
//   count3++;
//   console.log(count3);
// }

// outer3();
// outer3();
// outer3();

// ====================================== 
// small example 4 (to solve external variable manipulation & keep repeating the counter without repeating the same value 1) 

// function outer4 (){
//   let count4 = 0;
//   count4++;
//     console.log(count4);

//   return () => {
//     count4++;
//     console.log(count4);
//   }
// }

// outer4(); // 1
// outer4(); // 1
// outer4(); // 1

// let counterOp = outer4();
// console.log(counterOp); // 1, [Function (anonymous)]

// counterOp(); // 2
// counterOp(); // 3
// counterOp(); // 4
// counterOp(); // 5

// // Sir example ; Above is my custom example based on this example
// function outer5 (){
//     let count5 = 0;
//     console.log(count5);

//   return () => {
//     count5++;
//     console.log(count5);
//   }
// }

// let counterOp2 = outer5();
// console.log(counterOp2); // [Function (anonymous)]

// counterOp2(); // 1
// counterOp2(); // 2
// counterOp2(); // 3
// counterOp2(); // 4
