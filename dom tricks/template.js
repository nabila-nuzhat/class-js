// example ref source: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
    // creating li with template
    // usually done with loop, which is hassle for larger data
const ul = document.querySelector("ul");
// const fruits = ["Apple", "Orange", "Banana", "Melon"];
const fragment = document.createDocumentFragment() //  = new DocumentFragment();

for (let i = 1; i <= 2000; i++){
    const li = document.createElement("li");
    li.textContent =  `hello ${i}`;
    fragment.appendChild(li);
}

ul.append(fragment);