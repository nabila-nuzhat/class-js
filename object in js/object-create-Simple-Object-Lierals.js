// Create object WAYS -- 1 ==================
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car);


// Create object WAYS -- 2 ==================
const  person = {};
person.name = "Nabila";
person.age = 34;
person.bloodGroup = "O+";
person.eyeColor = "black-brown";

console.log(person);

// Create object WAYS -- 3 ================== with invalid Naming convention
const luxuryCar = {type:"Rolls-Royce", model:"Dawn", color:"black", "license num": "DA-23-457690"};
console.log(luxuryCar);


const smallSUV = {};
smallSUV.type = "Mazda";
smallSUV.model = "CX-3";
smallSUV.color = "red"
smallSUV["Engine Type"] = "Mazda's  SkyActiv-G 2.0L 4-cylinder; power: 148-154 hp)";
console.log(smallSUV);

console.log(smallSUV["Engine Type"]);
