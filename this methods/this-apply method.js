/* 
// this.apply method another Multiple argument example: works as this-call method but passes arguements in Array =====================

Syntax: function.apply(thisarg, [args array])

Thisarg: the value to use as this when calling the function.
args array: an array / array like object of arguments to pass to the function.
 */

const person1111 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function(age, city, country) {
        return this.name + " " + this.surname + ", " + age + ", " + city + ", " + country;
    }
}

const person22222 = {
    name: 'Simy',
    surname: 'Garwal'
}

console.log(person1111.sayName.apply(person22222, [33, "NewYork", "USA"])); // Simy Garwal, 33, NewYork, USA