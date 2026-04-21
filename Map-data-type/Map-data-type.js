// create Map way 1 ---------------------------
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

// create Map way 2 ---------------------------
const map2 = new Map([
    [obj, true], 
    [()=> {}, "a"]
    ]);
    console.log(map2);
    console.log(map2.size);
   // console.log(map2.clear); // clears whole map
     console.log(map.get(()=> {})); // undefined, bcz here it gives a reference not direct value. so forEach is needed to get function's value
// forEach in Map ----------------------
map2.forEach((val, key, map)=>{
    // console.log("v", val);
    // console.log("i", key);
    // console.log("m", map);
    console.log(map.get(key)); // true a
    
})
//// o/p:
// v true
// i {}
// m Map(2) { {} => true, [Function (anonymous)] => 'a' }
// v a
// i [Function (anonymous)]
// m Map(2) { {} => true, [Function (anonymous)] => 'a' }