// create list of drinks ==================
const h1Elm = document.createElement("h1");
//const h1Elm = document.createElement("h1").innerHTML = "Drinks!"; // innerHTML / innerText cannot be applied in chaining. bcz document.createElement("p") returns a DOM element. innerText is a property, not a function. Properties don’t return the element, so chaining stops, assign to innerText, don’t call it.
h1Elm.innerHTML = "Drinks! with forEach()"
document.body.append(h1Elm);

// ul -------------------------------------
const ulElm = document.createElement("ul");
document.body.append(ulElm);


// list of something = array ------
let drinksList = ["Coffee", "Coca Cola", "Ribena", "Lemon Mint"];

// pick up each drink put it to the list: make list with forEach() ------------

drinksList.forEach((drinkSingle) => {
const liElm = document.createElement("li");
// liElm.innerText = "Coffee";
liElm.innerText = drinkSingle;
ulElm.append(liElm); // page updates every time
})


// Drinks list using for...of + createDocumentFragment() ================================
const h1Elm2 = document.createElement("h1");
h1Elm2.innerHTML = "Drinks! with for...of + createDocumentFragment() "
document.body.append(h1Elm2);

const ulElm2 = document.createElement("ul");
document.body.append(ulElm2);

const fragment = document.createDocumentFragment();
for (drinkSingle2 of drinksList){ // for...of loop
    const liElm2 = document.createElement("li");
    liElm2.innerText = drinkSingle2;
    fragment.append(liElm2); // no page update
}

ulElm2.append(fragment);  // page updates once
// REASONS for FRAGMENT:
    // DocumentFragment = temporary invisible container
    // Makes DOM updates faster
    // Used by professionals
    // Best with for...of
    // Pros
    // // Fast and safe
    // //Best for dynamic lists
    // // Professional approach
    // // Easy to add events
    //  Cons
    // // Slightly more code

    // // "DocumentFragment" is a lightweight, invisible container used to hold DOM nodes temporarily before inserting them into the real DOM. It is not part of the live DOM, so changes inside it do not cause reflow or repaint.

    ////// forEach() Pros // Short and easy // Good for small static content
    // Cons // Slower for large content // Replaces existing elements // Risky if data comes from users (security issues) // Hard to add events later