function higherOrderFunction(){
    function callBackFunction(){
        console.log("Welcome!");
    }

    return callBackFunction();
}

higherOrderFunction();
// let result = higherOrderFunction(); console.log(result); //Welcome! undefined
