// multiply using memoization memo
const memo = {};
function mulMex(n){
    const startMEX = Date.now();
    console.log("startMEX", startMEX);
    setTimeout(() => {
        if(memo[n]){
            console.log("Apply the memo", memo[n]);
        }else{
            let resultMex = n*1000;
            console.log("without memo use", resultMex);
            memo[n] = resultMex;
        }

    const endMex = Date.now();
    console.log("endMex", endMex);
   
    console.log((endMex-startMEX - 1000+ "ms"));
    // console.log(resultMex); 
    }, 1000);
}