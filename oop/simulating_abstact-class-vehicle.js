// - Simulating Abstract Classes:
// // - can mimic "Abstract Classes" by creating a base class & throwing error in methods that are intended to be abstract, 
// //- forcing derived classes to implement their own version
// //- if extended to subclass, the main class's method should be called in the subclass.


// ------------- example
// // Abstract-like Base Class (Conceptual)
class Vehicle{
    startEngine(){
        throw new Error(" startEngine() must be implemented in the subclasses") // forced error
    }
}

class Bike extends Vehicle{
    startEngine(){
        // console.log("bike engine started with a button"); // without implementing the method of parent class/ superclass in this sub-class/child-class, the forced-error above will be shown
        console.log("bike engine started"); // without implementing the method of parent class/ superclass in this sub-class/child-class, the forced-error above will be shown
    }
}
class SUV extends Vehicle{
    startSUVEngine(){
      //  console.log("bike started with a button"); // without implementing the method of parent class/ superclass in this sub-class/child-class, the forced-error above will be shown
        console.log("SUV engine started"); // without implementing the method of parent class/ superclass in this sub-class/child-class, the forced-error above will be shown
    }

    startEngine(){
      //  console.log("MY SUV  engine started with a button"); // without implementing the method of parent class/ superclass in this sub-class/child-class, the forced-error above will be shown
        console.log("MY SUV  engine started "); // without implementing the method of parent class/ superclass in this sub-class/child-class, the forced-error above will be shown
    }
}

const myBike = new Bike();
myBike.startEngine(); // bike engine started
const mySUV = new SUV(); // Error:  startEngine() must be implemented in the subclasses
mySUV.startEngine(); // MY SUV  engine started 
const myVehicle = new Vehicle(); // Error: Cannot call abstract method startEngine()