// memory leak 
// Global Variables -----------------
function createGlobalVariable() {
    leakyVar = "I'm a global variable!"; // Missing 'let', 'const', or 'var'
}
createGlobalVariable();
console.log(leakyVar); // Accessable even inside function bcz of no let
// Fix of the previous memory leak using "let"
// function createGlobalVariableTwo() {
//     let leakyVarTwo = "I'm a global variable the SECOND! try to ACCESS ME!"; // Missing 'let', 'const', or 'var'
// }
// createGlobalVariableTwo();
// console.log(leakyVarTwo); // not accessable bcz of "let"
// // ReferenceError: leakyVarTwo is not defined



// addEventListener ----------------------
// Memory leak example
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// If 'button' is removed from the DOM but the event listener isn't, memory is leaked.

// Fix: Remove event listeners when they’re no longer needed.
button.removeEventListener("click", callbackFunction);



// DOM References --------------------------
// Memory leak example
let cachedDiv = document.getElementById("myDiv");
document.body.removeChild(cachedDiv);

// 'cachedDiv' still holds a reference to the removed DOM element.
// Fix: Set references to null after removing DOM elements.
cachedDiv = null;


