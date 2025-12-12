//accesseing nested objects' property

const nestedObject = {
    key1 : "value 1",
    "key 2" : "value 2",
    "key 3" : "value 3",
    nested : {name : "x", age: 20},
    nested3 : {name : "y", age: 40},
    "nested 2" : {carOld: "lancer", carCurrent: "corolla", "car old color": "dark grey & beige", "car current color" : "beige"}
};

console.log(nestedObject);

console.log(nestedObject.nested.age);
console.log(nestedObject["nested 2"].carOld);
console.log(nestedObject["nested 2"]["car old color"]);

delete nestedObject.nested3.age;
delete nestedObject["nested 2"]["car current color"];
console.log(nestedObject);




