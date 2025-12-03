// Block Scope { } ========================
{
    let globalVariableLet = "I'm in global scope";
    var globalVariableVar = "I'm in global scope";
}

function myFunction() {
  // globalVariableVar can be accessed by function bcz variable with var can be accesses from any scope.
 console.log(globalVariableLet); //ReferenceError: globalVariableLet is not defined (bcz inside block scope)
 console.log(globalVariableVar);
  
}

myFunction();