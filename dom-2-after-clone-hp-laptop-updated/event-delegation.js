// like manager
// element which got clicked => target
// element which got the event-listener => current target
    // example: using power of event bubbling + delegation.
    // instead of selecting each "li" 1 by one through loop. using "delegation" & "bubbling concept" event-listener is added to parent "ul" for simpler application
 const ul = document.querySelector("ul");

      ul.addEventListener("click", function (event) {
        console.log(event.target);
        console.log(event.currentTarget);
        
        event.target.classList.toggle("highlight");
      });

// difficult in case of nested child