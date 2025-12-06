function higherOrderFunction(){
    return function () {
        console.log("I am Anonymous!!!");
    }
    
}

let result = higherOrderFunction();
console.log(result);
result();
