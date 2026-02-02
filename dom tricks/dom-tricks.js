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


// template : cloning =====================
    // create clone of template:
    // cloneNode() = clones with blank spaces as well
    // clone() = 
    // cloneNode(true) = true will access it to "nested" or else it will limited to parent element
    // create, use & add clone to "document":
        // const clone = templateElm.content.cloneNode(true)
        // clone.querySelector("element name").textContent = "target text content"
        // document.body.appendChild(clone)
    const templateElm = document.querySelector("#myTemplate");
    console.log(templateElm.content); // #document-fragment

    // creating, using and adding the clone to display 
    const clone = templateElm.content.cloneNode(true);
    // const clone = templateElm.content.clone(true);
    clone.querySelector("h2").textContent = "Dynamic Title to display" // usin
    clone.querySelector("p").textContent = "Dynamic description to display";
    document.body.appendChild(clone); // append child() explanation in  text file

