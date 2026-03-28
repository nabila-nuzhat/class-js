function sum0(a, b){
return a+ b;
}

let result0 = sum0(50, 10, 20, 5, 8);
console.log(result0); //60

//----------------REST OPERATOR 1 PARAMETER---------------------------

function restOperatorOp(...c){
return c;
}

let result1 = restOperatorOp(50, 10, 20, 5, 8); 
console.log(result1); // [ 50, 10, 20, 5, 8 ]

//----------Other Parameter + REST OPERATOR 1 PARAMETER---------------------------
function substract(a, b, ...c){
return a - b;
}

let resultSub = substract(50, 10, 20, 5, 8);
console.log(resultSub); // 40

//-----------REST OPERATOR 1 and multiple PARAMETER= SUM of all Arguements Passed---------------------------

// function restOperatorSum(...c)
function restOperatorSum(a, b, ...c)
{
    //  let sum = 0;
    let sum = a+ b;
    for(let index = 0; index < c.length; index++){
        // let sum = 0;
        sum += c[index];
    }

    return sum;
}

let result = restOperatorSum(100, 200, 2, 4, 20, 100, 55);
console.log(result); // 481