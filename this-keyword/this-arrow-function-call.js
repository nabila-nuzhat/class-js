//main example ===============================
const show = () => this

console.log('arrow function this', show()); // arrow function this {}
//============================================
//============================================
const arrowFunctionExample = () => {
    console.log("arrow function this:\n", this);  
}

arrowFunctionExample(); // arrow function this:
 //{}
 // arrow function this Window {window: Window, self: Window, document: document, name: '', location: Location, …}

 //============================================
 //============================================

 const arrowObjectFunction = {
    name : "ex man",
    quality: "vanish",
    "power Call" : () => this.name + " " + this.quality 
 };

console.log(arrowObjectFunction["power Call"]);//[Function: power Call]
console.log(arrowObjectFunction["power Call"]()); // undefined undefined; bcz arrow function does not have an parent function of which ut can inherit the "this"

// ==========================================================
// ==========================================================
 const arrowObjectFunction22 = {
    name22 : "XX man",
    quality22: "Invisble",
    "power Call-22" : function(){
        console.log(this.name22 + " " + this.quality22 );
    }
 }
 console.log(arrowObjectFunction22["power Call-22"]()); // XX man Invisble
//undefined // bcz the function itself only logs, does not return any variable's value. that is why the outer console.log() prints undefined.
 arrowObjectFunction22["power Call-22"](); // XX man Invisble

 //===========================================================
 //===========================================================

 var name33 = "Flash 100 yard Dash";

  const arrowObjectFunction33 = {
    name33 : "FLASH X",
    quality33: "Flash",
    powerCall : () => this.name33 + " " + this.quality33
 }

console.log(arrowObjectFunction33.powerCall()); // BROWSER o/p --> Flash 100 yard Dash undefined
// NODE.js terminal o/p --> undefined undefined; bcz In Node.js, top-level this is module.exports (an empty object), not global, so arrow functions inherit {} and properties are undefined.


//=========================================
//=========================================
const arrowObjectFunction44 = {
    name33 : "Hulk",
    quality33: "Smash & Crash",
    powerCall : function(){
      return () => this.name33 + " " + this.quality33;
    }
 }

 console.log(arrowObjectFunction44.powerCall()); //[Function (anonymous)]

  console.log(arrowObjectFunction44.powerCall()()); //Hulk Smash & Crash; gets the value from parent function object. bcz inherits its this
