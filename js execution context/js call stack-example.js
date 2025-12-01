var start = "start1";
console.log(start);

function funcA(m,n) {
    console.log("A");
    return m * n;
}

function funcB(m,n) {
    console.log("B");
    return funcA(m,n);
}

function getResult(num1, num2) {
    console.log("getResult");
    return funcB(num1, num2)
}

var res = getResult(5,6);
console.log(res); // 30

console.log("End");
