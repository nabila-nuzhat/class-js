// accessing elements of a parent element "without id, class"   
    // using traversing concept

const h1Elm = document.querySelector(".card").firstElementChild;
h1Elm.textContent = "Hola!!";
const pElm = h1Elm.nextElementSibling;
pElm.textContent = "Mi Amigos!!";

// ======
// <!-- access(update) existing: ul, li without class/ id; using dom traverse on  "li" as HTML collection / nodelist -->
    // using "traversing" concept
    // add text by JS
    // Array.from() ===
    // - eg. Array.from(element.children)
    //  safe, clean way to turn “array-like” or iterable things into a real Array 
    // so you can use array methods like map, filter, reduce, 
const ulElm = document.querySelector("ul"); // makes all child "li" HTML Collcetion
    // const liElms = ulElm.querySelector("li");
    // liElms.textContent = "Adios Amigos."; // only 1 (1st) li gets text
    // ulElm.children.textContent = "Adios Amigos."; // X X NOT POSSIBLE X X
    console.log(ulElm.children); // HTML Collection // element.children = "traversing concept"
    const liElms = Array.from(ulElm.children); // converts HTML Collection into "array"// can apply loop
    console.log(liElms);
    

    liElms.forEach((value, index)=>{
        value.textContent = `Hola! Amigo ${index}`;
    })






