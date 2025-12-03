function myFunction() {
  if (true) {
    var localBlockVariableVar = "I'm in local-block scope VAR";
    // let localBlockVariableLet = "I'm also in local-block scope LET";
  }
  console.log(localBlockVariableVar); // Accessible
  // console.log(localBlockVariableLet); // Error: blockVariable is not defined
}