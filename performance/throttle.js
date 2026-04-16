const spanElm = document.querySelector("span");

// calling throttle function
const throttleCall = throttle(callScroll, 500);
// calling "throttleCall" to scroll to prevent dom countless refresh/reload 
window.addEventListener("scroll", throttleCall);

function callScroll(){
    console.log("scroll count", performance.now());
    
    spanElm.textContent = window.scrollY; // with every scroll, dom refreshes and loads countless times.
}

// throttle function for timer
function throttle(fn, delay){
    let lastTime = 0;
   
    return function(...arg){
         const now = Date.now();
        if (now - lastTime >= delay){
            lastTime = now;
            fn.apply(this, arg);
        };
    }
}