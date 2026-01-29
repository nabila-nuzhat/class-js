// Event Listener **=======================
// Event: A signal sent by browser to JS
// * tab open, mouse move, keyboard press, click on white spaces of web page, mouse on which position & pixel, microphone access, video access etc.
// add.eventListener
// Syntax (commonly used): element.addEventListener("event name", function(){});
    // this "function()" provides an "event object" as "parameter"
    // this "event object" is commonly denoted in shortcut as "e" in the parameter
    // "e" can be denoted with any other name also, but commonly "e" is used.
// event in HTML: 
    // pros: 
    // cons: overrindiong html, access multiple pages of html

// add Event listener: usually added by JS:
    //  btnElm.addEventListener("click", function(){
    // console.log("clicked!!")
    // });

// "event object"'s target, type check:
    // console.log(e);
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.type); // event name
    // console.log(event.target.name); // name attribute of button
    
// element.removeEventListener("click", function(){})
    // NOT removes the same function of the "event-listener" added to the element. bcz as "non-primitive data-type" the already applied "event-listener" function's reference != the "removeEventListener" later "function".
    // that is why instead of "inline-JS" applied "function" is assigned to a vaiable.

// "this" of "event-listener" = is the "element" where it is added. 
    // console.log(this); // element
    // bcz console.log( typeof button); = object
    // ** Arrow function = Window