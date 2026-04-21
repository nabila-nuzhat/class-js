const myObj = {
    foo: "bar",
    baz: 42
};

const objToMap = new Map(Object.entries(myObj));
console.log(objToMap); // Map(2) {'foo' => 'bar', 'baz' => 42}

// convert the converted map to object again -------------------
const objToMaptoObjReverse = Object.fromEntries(objToMap);

console.log(objToMaptoObjReverse); // {foo: 'bar', baz: 42}

