console.log(x); // Uncaught ReferenceError: x is not defined

let obj = null;
console.log(obj.name); // Uncaught TypeError: Cannot read properties of null

let arr = new Array(-1) // Uncaught RangeError: Invalid array length

decodeURIComponent("%"); // Uncaught URIError: URI malformed: for URL syntax 

eval("var x = ;"); // Uncaught EvalError; eval: calucating js function 