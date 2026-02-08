class Person {
  #name; // Private field using the # syntax
  #age;  // Private field

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // Getter for name
  get name() {
    return this.#name;
  }

  // Setter for name with validation
  set name(newName) {
    if (typeof newName === 'string' && newName.trim().length > 0) {
      this.#name = newName.trim();
    } else {
      console.error("Invalid name provided.");
    }
  }

  // Getter for age
  get age() {
    return this.#age;
  }

  // Setter for age with validation
  set age(newAge) {
    if (typeof newAge === 'number' && newAge >= 0 && newAge <= 120) {
      this.#age = newAge;
    } else {
      console.error("Invalid age provided.");
    }
  }
}

const person = new Person('Alice', 30);

// Accessing properties using the getter syntax (looks like a property, but calls the method)
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 30

// Modifying properties using the setter syntax (looks like property assignment, but calls the method)
person.name = 'Bob';
person.age = 25;

console.log(person.name); // Output: Bob
console.log(person.age);  // Output: 25

// Attempting to set an invalid age (will trigger the error message in the setter)
person.age = -5; // Output: Invalid age provided.

// Attempting to access the private field directly (will cause a SyntaxError)
// console.log(person.#name); 
