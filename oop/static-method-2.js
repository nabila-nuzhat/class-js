 class MyClass {
        static staticMethodOne() {
            return "Hello";
        }

        static staticMethodTwo() {
            // Calling another static method within the same class
            return MyClass.staticMethodOne() + " World!";
            // Alternatively, using this:
            // return this.staticMethodOne() + " World!";
        }
        }

        console.log(MyClass.staticMethodTwo()); // Output: Hello World!
            