function higherOrderFunction(){
   return function callBackFunction(){
        console.log("Welcome!");
    }

}

let result = higherOrderFunction();
console.log(result); // [Function: callBackFunction]......bcz the callBackFunction function is returned in the higherorder functon 

result(); // Welcome! ......the callBackFunction has been returned in the variable, the value of the variable is the callBackFunction. So, when it is called like a function the result of the callBackFunction comes as the output.
