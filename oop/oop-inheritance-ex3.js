
class Character {
    constructor (speed) {
        this.speed = speed
    }
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

class Bug extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
}

class Robot extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
}


const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)
const bug2 = new Bug("Erik", "I drink decaf!", 5, 120)
const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30)
const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40)



// NOTE: Polymorohism  =========================================================
// in this example, "Polymorohism" is also applied:

    // // parameter-based Polymorohism :

// For example, we saw that the Enemy class has the sayPhrase method. And all our species classes inherit from the Enemy class, which means they all have the sayPhrase method as well.

// But we can see that when we call the method on different species, we get different results:

// const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
// const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)

// alien2.sayPhrase() // output: "Run for your lives!"
// bug1.sayPhrase() // output: "Your debugger doesn't work with me!"
// And that's because we passed each class a different parameter at instantiation. That's one kind of polymorphism, "parameter-based".


    // // inheritance-based Polymorohism :

//  Another kind of polymorphism is "inheritance-based", and that refers to when we have a parent class that sets a method and the child overrides that method to modify it in some way. The example we saw previously applies perfectly here as well:

// class Enemy extends Character {
//     constructor(name, phrase, power, speed) {
//         super(speed)
//         this.name = name
//         this.phrase = phrase
//         this.power = power
//     }
//     sayPhrase = () => console.log(this.phrase)
//     attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
// }


// class Alien extends Enemy {
//     constructor (name, phrase, power, speed) {
//         super(name, phrase, power, speed)
//         this.species = "alien"
//     }
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
//     attack = () => console.log("Now I'm doing a different thing, HA!") // Override the parent method.
// }

// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
// alien1.attack() // output: "Now I'm doing a different thing, HA!"
// This implementation is polymorphic because if we commented out the attack method in the Alien class, we would still be able to call it on the object:

// alien1.attack() // output: "I'm attacking with a power of 10!"


