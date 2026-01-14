// Traversing in JavaScript ==========================================
// * means moving through or navigating between elements or items—most commonly through the DOM (Document Object Model), but it can also apply to arrays or objects.

// parent element ->element.parentElement = only Elements
// parent Node ->element.parentNode 
// children -> element.children = only Elements
// children Nodes -> element.childrenNodes = all Elements + all nodes (space(text dhore), text, starting & ending tag...etc)
// next Element Sibling -> element.nextElementSibling = next Element
// next Sibling -> element.nextSibling = next node (eg. space) is Sibling
// element.nextElementSibling.children -> Children (all the childs) of next Element Sibling
// element.nextElementSibling.children[0] = element.nextElementSibling.children[index] -> selecting any one child of the nextsibling by index
// Next element sibling: element.nextElementSibling.children[0].nextElementSibling = element.nextElementSibling.children[index].nextElementSibling
// Previous element sibling: element.nextElementSibling.children[0].previousElementSibling = element.nextElementSibling.children[index].previousElementSibling

// See Class of elemennt -> element.classList // op-p = DOMTokenList/ element.className // o-p = name of class
// add more id : element.id += "new id"
// Change id: element.id --- usually not used.
// add Class Name : element.className // replaces old class
// element.classList:
    // Multiple Class ADD : element.classList.add("class name")
    // remove Class :  element.classList.remove("class name")
    // replace selected class : element.classList.replace("old class name","new class name")
    // toggle class :  element.classList.toggle("class name") 
    // // toggle example =  // // <button id="btn">Toggle</button>
                        // // <div id="box"></div>
                        // // const btn = document.getElementById("btn");
                        // // const box = document.getElementById("box");

                        // // btn.addEventListener("click", () => {
                        // // box.classList.toggle("highlight");
                        // // });
// toggle My-example:


// Contains a class or not :  element.classList.contains("class name")
//

//-------------------------------- Chatgpt Rest ----------
// // Why traversing is important
// * Manipulating DOM elements
// * Reading or changing data
// * Creating lists dynamically
// * Event handling and delegation



// 1️⃣ DOM Traversing (most common meaning)

// DOM traversing is moving from one HTML element (node) to another using JavaScript.

// You can move:

// Up (to parent)

// Down (to children)

// Sideways (to siblings)

// 🔼 Upward Traversing
// element.parentElement
// element.parentNode


// Example:

// const li = document.querySelector("li");
// console.log(li.parentElement); // <ul>

// 🔽 Downward Traversing
// element.children
// element.firstElementChild
// element.lastElementChild


// Example:

// const ul = document.querySelector("ul");
// console.log(ul.children); // HTMLCollection of <li>

// ↔ Sideways Traversing
// element.nextElementSibling
// element.previousElementSibling


// Example:

// const firstLi = document.querySelector("li");
// console.log(firstLi.nextElementSibling); // next <li>

// 2️⃣ Traversing Arrays

// Traversing an array means visiting each element one by one.

// const arr = [1, 2, 3];

// arr.forEach(value => {
//   console.log(value);
// });


// Other ways:

// for

// for...of

// map()

// filter()

// 3️⃣ Traversing Objects

// Traversing an object means iterating through its keys or values.

// const person = { name: "Alex", age: 25 };

// for (let key in person) {
//   console.log(key, person[key]);
// }
