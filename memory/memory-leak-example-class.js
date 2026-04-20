// class example-------------------
let person = {
    name: "Eb", age: 50
};
const p = person;
person = null;
console.log("p =", p); // p = { name: 'Eb', age: 50 } // memory leak due to p is holding reference for the same value of person object. so even after person is "null" memory leak occured due reference of "p".
// so to prevent the leak via "p", "p" needs to be null too.

console.log("person =", person); // null
