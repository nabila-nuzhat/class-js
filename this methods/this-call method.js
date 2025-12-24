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
      return "My name is " + this.firstMyName +" "+ this.lastMyName;
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

//similar to Sir example with EXTRA Arguement: through method ===============

const person3 = {
    firstNameCeleb: "Vidya",
    lastNameCeleb : "Balan",
    idCeleb       : 3560,
    starCeleb : function(age) { // age parameter for extra arguement
      return "I am " + this.firstNameCeleb +" "+ this.lastNameCeleb + ", age: "+ age;
    }
};
console.log(person3.starCeleb(33)); // My name is Nabilaaa Nuzhat


const person4 = {
    // firstYourName: "Parvez",
    // lastYourName: "islam" // variable name = owner of object method object's varibale name
    firstNameCeleb: "Atif",
    lastNameCeleb: "Aaslam - The singer"
}

console.log(person3.starCeleb.call(person4, 35));


// Call method another Multiple argument example =====================
const person1111 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function(city, country) {
        return this.name + " " + this.surname + ", " + city + ", " + country;
    }
}

const person22222 = {
    name: 'Jimena',
    surname: 'Juarez'
}

console.log(person1.sayName.call(person2, "DF", "Mexico"));
