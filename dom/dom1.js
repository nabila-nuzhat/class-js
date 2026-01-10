// accesses HTML each parts as objects 
// eg. document.body ...etc
console.log(document.title);
console.log(document);


// Ways to access DOM parts ==================================================================
console.log(document.getElementById("para"));
console.log(document.getElementsByClassName("pn")); // HTML Collection= looks like "array", but NOT array

console.log( document.getElementsByTagName("h1")); // HTML Collection [h1]

// ----------- Ways to access DOM parts using Global querySelectorAll / querySelector

const idP = document.querySelector("#para");
console.log(idP);

const classPn = document.querySelector(".pn"); // <p id="para">khsahdjsckdznc djlsakj</p>
console.log(classPn); // <div class="pn">11111111111111</div>


const divClassPn = document.querySelectorAll(".pn"); 
console.log(divClassPn); // Nodelist = looks like "array", but NOT array but can be used "forEach()" "array-method" to loop. can be accessed as array using index

// forEach in Nodelist -------------------------------------------------
// syntax: array.forEach(value => {
  // console.log(value);
    // });
    // array.forEach((element) => {
        // code to run for each element
    //});
divClassPn.forEach((divSingle) => console.log(divSingle) 
) // all divs
console.log(divClassPn[1]); // access as index, not array but can be accessed as array using index


// nested parts : Ways------------------------------------------
console.log(document.querySelector("#sec h2")); //   <h2>Helooo DOmmm!!</h2>
console.log(document.querySelector("#blogPage")); // <a href="#" id="blogPage">Blog</a>

const aNews = document.querySelectorAll(".pn")[2].querySelectorAll("a")[2];
console.log(aNews); //  <a href="#">Business News</a>