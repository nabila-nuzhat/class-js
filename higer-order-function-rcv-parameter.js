function higherOrderparameterAsFunction(callbackFunction){
    callbackFunction();
}

higherOrderparameterAsFunction(function(){
    console.log("sending function as parameter!!");
})