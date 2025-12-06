function sum(a=0, b=0){
    if(a||b){
        return "give me 2 numbers";
    }
        return a+b; }

// !(a+b)------------------------------
// function sum(a=0, b=0){
//     if(!(a||b)){
//         return "give me 2 numbers";
//     }
//         return a+b;   }

let n = sum();
console.log(n);
// let m = sum(20, 10);
// console.log(m);

