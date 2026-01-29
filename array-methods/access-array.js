let cars = ["lancer", "tesla", "jaguar"];

// add new value in specified index ==============
cars[3] = "battery rickshaw";
console.log(cars);
cars[10] = "dutson";
console.log(cars); // [ 'lancer', 'tesla', 'jaguar', 'battery rickshaw', <6 empty items>, 'land cruiser']
console.log(cars[4]); // undefined


// modify value: in specified "index" ==============
cars[2] = "volkswagen";
console.log(cars);

// ==== INTERVIEW =====
console.log("cars", cars);
cars.length = 2;
console.log(cars); // [ 'lancer', 'tesla' ]

cars.length = 1;
console.log(cars); // [ 'lancer' ]

cars.length = 0;
console.log(cars); // []


