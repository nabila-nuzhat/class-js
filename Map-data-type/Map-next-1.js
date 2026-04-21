const map3 = new Map([
    [obj, true], 
    [()=> {}, "a"]
    ]);

const r = map3.keys();
const r2 = map3.entries(); // ???? turming into array
console.log(r); // MapIterator {{…}, ƒ}  
// ???? here in place of "Map" , "MapIterator" is shown
console.log(r2); // MapIterator {{…} => true, ƒ => 'a'}

// // using next in MapIterator using ".entries" without loop, the next values can be seen. no "next" in Map. it is working on a iterator itself.
console.log(r2.next()); 
// // o/p:
    // {value: Array(2), done: false}
    // done : false
    // value: (2) [{…}, true]
    // [[Prototype]]: Object
console.log(r2.next()); // ????? showing the same as previous

console.log(r2.next().value);
console.log(r2.next());
console.log(r2.next().value);
console.log(r2.next().done); // {value: undefined, done: true}