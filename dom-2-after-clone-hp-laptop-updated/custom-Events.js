// https://blog.logrocket.com/custom-events-in-javascript-a-complete-guide/
// Using the CustomEvent constructor
// eventPreventDefault() => can be "cancelable" via "custom event"

// example: show "user-name" after login without using database by "updating-UI" fast
    // putting the "user-name" in "CustomEvent" collecting from the user "login-input"
// "dispatching" CustomEvent is required
    // EXPLAIN LATER with DRAG and DROP, File Reader

const myEvent = new CustomEvent("myevent", {
  detail: {},
  bubbles: true,
  cancelable: true,
  composed: false,
});

document.dispatchEvent(myEvent);

document.addEventListener("myevent", (event) => {
  console.log("I'm listening on a custom event");
});
