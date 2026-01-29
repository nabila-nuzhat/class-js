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
    // toggle My-example = 
                        // // const greetingInSpainDivElm = document.querySelector("#greetingInSpain");
                       // // const toggleBtnElm = document.querySelector(".toggleBtn");

                      // // function holaOnClick(){
                      // // greetingInSpainDivElm.classList.toggle("hola");
                      // // toggleBtnElm.classList.toggle("toggleBtnStyle"); // correct way
                      // // }

                    
// Contains a class or not :  element.classList.contains("class name")
//