console.log(x); // Uncaught ReferenceError: x is not defined

let obj = null;
console.log(obj.name); // Uncaught TypeError: Cannot read properties of null
// null means no object
//You cannot read properties of null
// If it’s a function → it has built-in ".name"
// If it’s a normal object → only if YOU define name as the object's key-name

let arr = new Array(-1) // Uncaught RangeError: Invalid array length

decodeURIComponent("%"); // Uncaught URIError: URI malformed: for URL syntax 

eval("var x = ;"); // Uncaught EvalError; eval: calucating js function 