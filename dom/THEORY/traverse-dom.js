// Traversing in JavaScript ==========================================
// * means moving through or navigating between elements or items—most commonly through the DOM (Document Object Model), but it can also apply to arrays or objects.

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
