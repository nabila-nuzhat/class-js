// destructuring Nested: value only =============

let person = {firstName : "Kajal", lastName: "Agarwal", age: 36, cars: ["Lamborgini", "mercedez", "ford fiesta"]};

// let {firstName:firstNm, lastName:lastNm, age:personAG, cars:[car1]} = person; // for the car in "cars" array.


// let {firstName:firstNm, lastName:lastNm, age:personAG, cars:[,car2]} = person; // for 2nd car name, the "," comma sign skips the previous index-value of the "cars" array.


// let {firstName:firstNm, lastName:lastNm, age:personAG, cars:[,,car3]} = person; // for 3rd car


let {firstName:firstNm, lastName:lastNm, age:personAG, cars:[car1, car2, car3]} = person; // all 3 cars


console.log(firstNm);
console.log(lastNm);
console.log(personAG);
console.log(car1); // Lamborgini
console.log(car2); // mercedez
console.log(car3); // ford fiesta