const spanElm = document.querySelector("span");
window.addEventListener("scroll", callScroll);

function callScroll(){
    console.log("scroll count", performance.now());
    
    spanElm.textContent = window.scrollY; // with every scroll, dom refreshes and loads countless times.
}