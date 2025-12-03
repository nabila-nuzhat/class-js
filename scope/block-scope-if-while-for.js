// if / whil / for Bock Scope

if (true) {
  let blockVariableLet = "I'm in block scope LET";
  var blockVariableVar = "I'm in block scope VAR";
  console.log(blockVariableLet);
  console.log(blockVariableVar);
}
// Accessing blockVariable with Only LET here would result in an error

// console.log(blockVariableLet); // ReferenceError: globalVariableLet is not defined
console.log(blockVariableVar);