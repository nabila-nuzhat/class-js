// change DOM ================
// innerHTML -----------------------------

document.querySelector("h4").innerHTML = "My Name is Samantha";
const h4Elm = document.querySelector("h4");
h4Elm.innerHTML = "My Name is Nilima";

// -------------------- CSS add ----------------------------
// CSS JS > CSS inline --------------------
// elementvariable.style.other-property ---------------
h4Elm.style.color = "#eb4034";
h4Elm.style.backgroundColor = "rgb(252, 214, 144)";

// button: style change by click ----------------
function styleChange(){
    h4Elm.style.background = "#32f0ca";
    h4Elm.style.textAlign = "center";
    h4Elm.style.fontSize = "30px";
}


