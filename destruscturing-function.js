// destructuring in a "function's parameter" ====================
let person = {firstName : "Vidya", lastName: "Balan", age: 51, cars: ["ferrari", "Chevrolet"]};

function speech({ firstName, lastName, age }){
    console.log(`Hi, I am ${firstName} ${lastName}. Today I am ${age} years old. Mujhe ab ${person.firstName} Kapoor naam se bhi jante hain.`);
}

speech(person); // arguement is the object that is destructured

// just for comparison object as parameter ======================
function objectAsParameter(objectPerson){
    console.log(`I am THE ${objectPerson.firstName}.`);
}

objectAsParameter(person);
