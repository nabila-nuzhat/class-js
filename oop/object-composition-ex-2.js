class CanSwim{
    swim(){
        return "can swim";
    }
}


class SuperHero{
    constructor(name){
        this.name = name;
        // this.swim = new CanSwim().swim; // also possible
    }

    swim(){
        return new CanSwim().swim();
    }
}


const superman = new SuperHero("Superman"); 
console.log(superman.name); 
console.log(superman.swim());


