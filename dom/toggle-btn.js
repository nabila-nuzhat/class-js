// toggle class :  element.classList.toggle("class name")  // the element is where the toggle-effect will be applied/visible
// // toggle example (chatgpt)=  // // <button id="btn">Toggle</button>
                        // // <div id="box"></div>
                        // // const btn = document.getElementById("btn");
                        // // const box = document.getElementById("box");

                        // // btn.addEventListener("click", () => {
                        // // box.classList.toggle("highlight");
                        // // });
// toggle My-example:===================================
const greetingInSpainDivElm = document.querySelector("#greetingInSpain");
const toggleBtnElm = document.querySelector(".toggleBtn");

function holaOnClick(){
    greetingInSpainDivElm.classList.toggle("hola");
    // toggleBtnElm.style.backgroundColor = "rgb(180, 4, 180)" // style stays after 1st click.
    toggleBtnElm.classList.toggle("toggleBtnStyle"); // correct way
}
