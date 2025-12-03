var messageVar = "Global message VAR";
let messageLet = "Global message LET";

function showMessage() {
  var messageVar = "Local message VAR"; // This "shadows" the global variable
  let messageLet = "Local message LET"; // This "shadows" the global variable
  console.log(messageVar); // Accessing the local variable
  console.log(messageLet); // Accessing the local variable
}

showMessage();
console.log(messageVar); // Accessing the global variable
console.log(messageLet); // Accessing the global variable