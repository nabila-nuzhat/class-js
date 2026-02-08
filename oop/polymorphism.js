class AnimalKingdom{
    constructor(name){
        this.name = name;
    }
  animalSound = () => console.log("animal sound!");
    animalSound2 () {
      return  "animal sound!";
    }
}

class Dog extends AnimalKingdom{
    constructor(name){
        super(name);
    }

    animalSound = () => console.log("gheu gheu!");

}

class Cat extends AnimalKingdom{
    constructor(name){
        super(name);
    }

    animalSound = () => console.log(" meeu meeu!");
    ;
}

class Cow extends AnimalKingdom{
    constructor(name){
        super(name);
    }

    animalSound = () => console.log("Mooo!");
    ;
}

const brownCat = new Cat("brown cat");
console.log(brownCat.name);
brownCat.animalSound();
console.log(brownCat.animalSound2());


const dalmatian = new Dog("dalmatian");
console.log(dalmatian.name);
dalmatian.animalSound();
console.log(dalmatian.animalSound2());

