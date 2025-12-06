(function(){
    console.log("Esha");
})();

(function(name){
    console.log(name);
})("nabila");



// iife arrow function issue ?????????? // Typeerror: is not a function
(() => {
    console.log("nuzhat");
})();

// ISSUE 2: why shows output of only one function after running????