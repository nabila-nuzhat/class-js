// function sum(a, b){
// return a+ b;
// }

// let result = sum(50, 10, 20, 5, 8);
// console.log(result);

//----------------REST OPERATOR 1 PARAMETER---------------------------
// 
// function sum(...c){
// return c;
// }

// let result = sum(50, 10, 20, 5, 8);
// console.log(result);

//----------Other Parameter + REST OPERATOR 1 PARAMETER---------------------------
// function sum(a, b, ...c){
// return a - b;
// }

// let result = sum(50, 10, 20, 5, 8);
// console.log(result);

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
console.log(result);