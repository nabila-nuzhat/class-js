const btnElm11 = document.querySelector("#el1");
btnElm11.addEventListener("click", function(e){
    console.log(e); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
     console.log(e.target.name);
    
    console.log("I am clicked!");
    
})

btnElm11.removeEventListener("click", function(){}); // doesnt work. different function, not the same fn

//  event listener funtion assignerd in variable =========================================================
// // element.removeEventListener("click", function(){})
    // NOT removes the same function of the "event-listener" added to the element. bcz as "non-primitive data-type" the already applied "event-listener" function's reference != the "removeEventListener" later "function".
    // that is why instead of "inline-JS" applied "function" is assigned to a vaiable.
    // addEventListener syntax:
        // element.addEventListener(eventType, callbackFunction, options);
            // options in addEventListener is an optional third parameter that lets you control how the event behaves. It can either be a boolean (old way) or an object (modern and more flexible).
    // example

const btnElm12 = document.querySelector("#el12");
// Click 
const clickFunction =  function(event){
    console.log(event); 
    console.log(event.target);
    console.log(event.currentTarget);
     console.log(event.target.name);
    console.log(event.type);
    console.log(this); 
    console.log( typeof btnElm12); 
    console.log("I am clicked!!!!!!!!!!!!!!!");
    
}

btnElm12.addEventListener("click", clickFunction);
// btnElm12.removeEventListener("click", clickFunction);

// this of arrow function ===========================

const btnElmArrow = document.querySelector("#elArrow");
// Click 
const clickFunctionArrow =  (event) => {
    console.log(event); 
    console.log(event.target);
    console.log(event.currentTarget);
     console.log(event.target.name);
    console.log(event.type);
    console.log(this); // Window 
    console.log("I am clicked!!!!!!!!!!!!!!!");
    
}

btnElmArrow.addEventListener("click", clickFunctionArrow);