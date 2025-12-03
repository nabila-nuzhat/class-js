var globalVariableVar = "I'm in global scope";
let globalVariableLet = "I'm in global scope with Let";

function myFunction() {
  // This function can access both globalVariables with Let & Var
  console.log(globalVariableVar);
  console.log(globalVariableLet);
}

myFunction();