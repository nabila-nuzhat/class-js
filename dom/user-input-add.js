// user-input: dynamic list ===============================================================
// drink list (li) ADD "a" tag= innerHTML ---------------
// Element er bhitore arekta Element add -----------------
// WARNING: Cross-site scripting (XSS) : -----------------
// // // innerHTML may cause risk of Cross-site scripting (XSS): 
// // // a web security vulnerability that allows an attacker to inject malicious client-side scripts (typically JavaScript) into a legitimate, trusted website

// ----h1----
const h1ElmUser = document.createElement("h1");
h1ElmUser.innerHTML = "Make Your Own Cockatail! User's input"
document.body.append(h1ElmUser);


// ---- input text -----
const inputElmUser = document.createElement("input");
inputElmUser.type = "text";
inputElmUser.name = "drinkUser"
inputElmUser.placeholder = "Add your drinks";
document.body.append(inputElmUser); 
// ---- btn ------ 
const btnElmUser = document.createElement("button");
btnElmUser.innerText = "Add Drinks";
document.body.append(btnElmUser); 

// ul -------------------------------------
const ulElmUser = document.createElement("ul");
document.body.append(ulElmUser); 

// elementname.style.style-property = "style value"
btnElmUser.style.marginTop = "20px";
btnElmUser.style.display = "block";
btnElmUser.onclick = addDrink;

// document.body.append(h1ElmUser, ulElmUser, inputElmUser, btnElmUser); // if want to append h1, ul, input field, btn in one line

let drinksUser = [];

function addDrink (){ // is same as: btnElmUser.onclick = function (){  }
    const inputValue = inputElmUser.value;
   
    if(inputValue){
        drinksUser.push(inputValue); // pushes the user value as array
        ulElmUser.innerText = ""; // clears the ul li items each time to avoid repeat li. data of li is stored reuses the previous data while doing loop. DOM rerenders very quickly. user cant notice the li item being cleared.
    
        drinksUser.forEach((drinkUser)=> {
        const liElmUser = document.createElement("li");
        liElmUser.innerText = drinkUser;
        liElmUser.style.textTransform = "capitalize";
        ulElmUser.append(liElmUser);
        inputElmUser.value = ""; // everytime the drink name is added, it clears the input box
        })
    }
    else{alert("Add Your Drink!")}
    
}
