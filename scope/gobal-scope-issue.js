var globalVariableVar = "I'm in global scope";
let globalVariableLet = "I'm in global scope with Let";

function myFunction() {
  // This function can access both globalVariables with Let & Var
  // both also can be reassigned inside local scope
  globalVariableVar = "Local Local Local VAR reassign";
  globalVariableLet = "Local LET reassign "
  console.log(globalVariableVar);
  console.log(globalVariableLet);
}

myFunction();
console.log(globalVariableVar);
console.log(globalVariableLet);