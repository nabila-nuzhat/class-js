const map = new Map();
const obj = {};
map.set(true, false);
map.set(false, true);
console.log(map); // Map(2) { true => false, false => true }
// here, Map(2), "2" is  size of the Map (the number of key-value pairs it contains).
map.set(obj, true); // ???? direct object as key might cause issue in finding our since object stores in reference.
console.log(map.get(obj)); // true

if (map.has(obj)){
    map.set(obj, "hello"); // 
    //delete key-value: ---
    // map.delete(obj);
}
console.log(map); //  Map(3) {true => false, false => true, {…} => 'hello'}
// [[Entries]]
// 0
// : 
// {true => false}
// 1
// : 
// {false => true}
// 2
// : 
// {Object => "hello"}
// size
// : 
// 3
// [[Prototype]]
// : 
// Map
