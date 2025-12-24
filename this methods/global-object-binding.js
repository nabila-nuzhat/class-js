//Global Object Binding

let sayName = function(name) {
    console.log(this.name);
};

//window.name = 'Tapas'; // ReferenceError: window is not defined... bcz window is not in Node.js

// globalThis.name = "Tapas"; // Tapas
global.name = "Tapas"; // Tapas... same as  globalThis.name
sayName();
sayName();