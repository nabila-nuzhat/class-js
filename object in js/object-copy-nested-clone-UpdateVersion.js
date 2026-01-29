// 
const person = {
    name: "nabila",
    cars: ["lancer", "fiesta", "toyota"]
}

const copyPerson =JSON.parse(JSON.stringify(person));
console.log("copyPerson", copyPerson);
console.log(copyPerson===person);

// structred Clone: new update for cloning "nested object" ===================================================

const person2 = {
    name: "shumon",
    cars: ["lancer", "toyota"]
};

const copyPerson2 = structuredClone(person2); // new update for cloning "nested object"
console.log("copyPerson2", copyPerson2);
console.log(copyPerson2===person2);
