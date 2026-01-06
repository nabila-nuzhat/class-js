// createElement ============================
// append: to put an element inside another elem =========
const createP = document.createElement("p");
console.log(createP); //<p></p>
document.body.append(createP);
createP.innerHTML = "Bangladesh is my birthplace";

// append p in existing another existing section ----------- --WIP
const createP2 = document.createElement("p");
const secElm2 = document.querySelector("#secAp");
const secAppPara = document.secElm.append(createP);
secAppPara.innerHTML = "The Rivers flows through Bangladesh like bloods in vein";

