// this-apply method another Multiple argument example =====================
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

console.log(person1111.sayName.apply(person22222, [33, "NewYork", "USA"]));