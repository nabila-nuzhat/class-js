// This Call Method
// Main Example ======================================
const person1 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function() {
        return this.name + " " + this.surname;
    }
}

const person2 = {
    name: 'Jimena',
    surname: 'Juarez'
}

console.log(person1.sayName.call(person2)); // Jimena Juarez
//======================================================


// importance of ";" in iifee
// let a = 10;
// (function(){
//     console.log("hi");
// })();


//My Example=========================================
const personMy = {
    firstMyName: "Nabilaaa",
    lastMyName : "Nuzhat",
    idMy       : 3560,
    hiMyName : function() {
      return "My name is " + this.firstMyName + " "+ this.lastMyName;
    }
};
console.log(personMy.hiMyName()); // My name is Nabilaaa Nuzhat


const personYou = {
    // firstYourName: "Parvez",
    // lastYourName: "islam" // variable name = owner of object method object's varibale name
    firstMyName: "Parvez",
    lastMyName: "islam"
}

console.log(personMy.hiMyName.call(personYou)); // My name is Parvez islam
