class Character {
    constructor (speed) {
        this.speed = speed
    }

    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
    constructor(power, speed) {
        super(speed)
        this.power = power
    }

    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    #birthYear // We first need to declare the private property, always using the '#' symbol as the start of its name.

    constructor (name, phrase, power, speed, birthYear) {
        super(name, phrase, power, speed)
        this.species = "alien"
        this.#birthYear = birthYear // Then we assign its value within the constructor function
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    howOld = () => console.log(`I was born in ${this.#birthYear}`) // and use it in the corresponding method.
}

// We instantiate the same way we always do
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50, 10000);

alien1.howOld() // output: "I was born in 10000"


// console.log(alien1.#birthYear) // This throws an error = SyntaxError: Private field '#birthYear' must be declared in an enclosing class
console.log(alien1) 
// output:
// Alien {
//     move: [Function: move],
//     speed: 50,
//     sayPhrase: [Function: sayPhrase],
//     attack: [Function: attack],
//     name: 'Ali',
//     phrase: "I'm Ali the alien!",
//     power: 10,
//     fly: [Function: fly],
//     howOld: [Function: howOld],
//     species: 'alien'
//   }