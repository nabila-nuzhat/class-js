// destructuring in a "function's parameter" ====================
let person = {firstName : "Vidya", lastName: "Balan", age: 51, cars: ["ferrari", "Chevrolet"]};

function speech({ firstName, lastName, age }){
    console.log(`Hi, I am ${firstName} ${lastName}. Today I am ${age} years old. Mujhe ab ${person.firstName} Kapoor naam se bhi jante hain.`);
}

speech(person); // arguement is the object that is destructured

// just for comparison object as parameter ======================
function objectAsParameter(objectPerson){ // objectPerson: is the parameter of function, as "person" object will be used as an "arguement" of the function.
    console.log(`I am THE ${objectPerson.firstName}.`);
}

objectAsParameter(person);
