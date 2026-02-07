class Car {
    #checkEngine() { // Private method (cannot be accessed outside the class)
        console.log("Internal: Checking engine status...");
        // Complex logic here (e.g., verifying temperature, oil levels)
        return true; 
    }

    #startEngine() { // Private method
        if (this.#checkEngine()) {
            console.log("Internal: Engine started successfully.");
        } else {
            console.log("Internal: Engine check failed.");
        }
    }

    // Public method (the abstracted interface for the user)
    drive() {
        console.log("User action: Attempting to drive the car.");
        this.#startEngine(); // Calls the hidden functionality
        console.log("User sees: Car is now driving!");
    }
}

const myCar = new Car();
myCar.drive();
// Output:
// User action: Attempting to drive the car.
// Internal: Checking engine status...
// Internal: Engine started successfully.
// User sees: Car is now driving!

// Attempting to access private methods directly will cause an error:
// myCar.#startEngine(); // SyntaxError: Private field '#startEngine' must be declared in an enclosing class
