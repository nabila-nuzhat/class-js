function myFunction() {
  if (true) {
    var localBlockVariableVar = "I'm in local-block scope VAR";
    let localBlockVariableLet = "I'm also in local-block scope LET"; // not accessible outside block scope
  }
  console.log(localBlockVariableVar); // Accessible
  // console.log(localBlockVariableLet); // Error: ReferenceError: localBlockVariableLet is not defined
}

myFunction();