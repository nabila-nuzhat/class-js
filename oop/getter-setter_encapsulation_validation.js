class Person {
  #birthYear; // True private field (ES2022+)
  _name;     // Conventionally private/protected property (older style)

  constructor(name, birthYear) {
    this._name = name;
    this.#birthYear = birthYear;
  }

  // Getter for name (read access)
  get name() {
    return this._name;
  }

  // Setter for name (write access with validation)
  set name(newName) {
    if (typeof newName !== 'string' || newName.length < 2) {
      console.error("Name must be a string of at least 2 characters.");
      return;
    }
    this._name = newName;
  }

  // Getter for a computed property 'age'
  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.#birthYear; // Accesses the private field
  }
}

const person = new Person("Alice", 1990);

// Access the getter like a property (no parentheses)
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 36 (based on current year 2026)

// Use the setter like a property assignment (no parentheses)
person.name = "Bob";
console.log(person.name); // Output: Bob

person.name = "A"; // Output: Name must be a string of at least 2 characters.
console.log(person.name); // Output: Bob (value remains unchanged due to validation)
