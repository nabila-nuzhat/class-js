class Calculator {
        // An instance method (needs an object instance to be called)
        addInstance(a, b) {
            return a + b;
        }

        // A static method (called on the class itself)
        static add(a, b) {
            return a + b;
        }
        }

        // Calling the static method:
        const sum = Calculator.add(5, 10);
        console.log(sum); // Output: 15

        // Trying to call the static method on an instance results in an error:
        const myCalc = new Calculator();
        // myCalc.add(5, 10); // Uncaught TypeError: myCalc.add is not a function

        // Calling the instance method:
        const instanceSum = myCalc.addInstance(2, 3);
        console.log(instanceSum); // Output: 5
