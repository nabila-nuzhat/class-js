const arrayName = [
    {name: "ab", age: 15},
    {name: "cd", age: 16},
    {name: "ef", age: 17},
    {name: "gh", age: 20},
    {name: "ij", age: 30}
    ];
const newObjectByGroup = Object.groupBy(arrayName, ({age}) => age);

// console.log(newObjectByGroup);
console.log(newObjectByGroup);

