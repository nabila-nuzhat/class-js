function mul1(n){
    const start1 = Date.now();
    console.log("start1", start1);
    // let result1 = n * 1000;
    setTimeout(() => console.log(n * 1000000), 20000
    ); // this 2000 (2ms) is only the timer for delay of calculation starting, but NOT the time which takes to execute the code/calc.
    const end1 = Date.now();
    // console.log(result1);
    
    console.log("end1", end1);
    console.log((end1-start1 + "ms")); // 1ms ~/ 0ms (this is the time t)
    
    // return result;
}

// example try 2 ------------------------ calc inside setTimeout() --- 2nd example
function mul2(n){
    setTimeout(() => {
    const start2 = Date.now();
    console.log("start2", start2);

    let result2 = n * 1000;

    const end2 = Date.now();
    console.log("end2", end2);
   
    console.log((end2-start2 + "ms"));
    console.log(result2); 
    }, 10000);
}

// example try 3 ------------------------ calc inside setTimeout() --- 2nd example
function mulMex(n){
    const startMEX = Date.now();
    console.log("startMEX", startMEX);
    setTimeout(() => {

    let resultMex = n * 1000;

    const endMex = Date.now();
    console.log("endMex", endMex);
   
    console.log((endMex-startMEX - 1000+ "ms"));
    console.log(resultMex); 
    }, 1000);
}