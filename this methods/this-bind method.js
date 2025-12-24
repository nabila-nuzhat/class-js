// this-bind: 
// works as call & apply method but calls and returns as a Function =====================
const celeb1 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function(age, city, country) {
        return this.name + " " + this.surname + ", " + age + ", " + city + ", " + country;
    }
}

const celeb2 = {
    name: 'Salman',
    surname: 'Khan'
}

console.log(celeb1.sayName.bind(celeb2, 33, "NewYork", "USA")); // [Function: bound sayName]

const sayCelebName = celeb1.sayName.bind(celeb2, 33, "New York", "USA");
console.log(sayCelebName()); //Salman Khan, 33, New York, USA

// example without arguement ==================
const celeb3 = {
    name: 'Jack',
    surname: 'Micheal',
    sayName: function() {
        return this.name + " " + this.surname;
    }
}

const celeb4 = {
    name: 'Penelope',
    surname: 'Decruz'
}

console.log(celeb3.sayName.bind(celeb4)); // [Function: bound sayName]

const sayCelebName2 = celeb3.sayName.bind(celeb4);
console.log(sayCelebName2()); //Penelope Decruz
