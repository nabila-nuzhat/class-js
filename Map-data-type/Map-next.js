// 1. Create a new Map
const userRoles = new Map();
userRoles.set("Alice", "Admin");
userRoles.set("Bob", "Editor");

// 2. Get an iterator for the map's entries [key, value]
const mapIterator = userRoles.entries();

// 3. Use .next() to access elements one by one
console.log(mapIterator.next()); 
// Output: { value: ["Alice", "Admin"], done: false }

console.log(mapIterator.next().value); 
// Output: ["Bob", "Editor"]

// 4. Checking completion
console.log(mapIterator.next()); 
// Output: { value: undefined, done: true }
console.log(mapIterator.next().value); 