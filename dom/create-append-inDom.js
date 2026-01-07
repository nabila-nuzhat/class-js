// createElement ============================
// append: to put an element inside another elem ======================================
// elementVariablename.innerHTML = "target output"; ------------------------------------

const createP = document.createElement("p");
console.log(createP); //<p></p>
document.body.append(createP);
createP.innerHTML = "Bangladesh is my birthplace";

// append p in existing another existing section ----------------------------------------
// syntax: document.element-name-where-want-to-append.append(appendable variable name)-----

const createP2 = document.createElement("p");
console.log(createP2);

createP2.innerHTML = "The Rivers flows through Bangladesh like bloods in vein";
const sectionAppend = document.querySelector("#secAppend");
console.log(sectionAppend);
// document.sectionAppend.append(createP2); // WRONG: cz sectionAppend already has document.querySelector in it.
sectionAppend.append(createP2); // Right


// append-before another element =========================================================
// parentNode.insertBefore(newNode, referenceNode); -------------------------------------

const h1Elm = document.createElement("h1");
h1Elm.innerHTML = "Beautiful Bangladesh!";
const h2Elm = document.querySelector("#h2secAppend");
sectionAppend.insertBefore(h1Elm, h2Elm);

console.log(sectionAppend); // 