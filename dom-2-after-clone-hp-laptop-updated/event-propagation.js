// event propagation
// bubbling
    // clicking on child proegates to parent to as well
    // Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

    // This is the default behavior of events on elements unless you stop the propagation
    // example ===================================
    const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

body.addEventListener('click', () => {
    body.style.backgroundColor = "black" // only want to change when only body is clicked but bcz of bubbling "clicking button" also turns "body" "black"
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})


button.addEventListener('click', () => {
  console.log("button was clicked")
})

// stop propegation : for stopping in js ===========================================
    // const body = document.getElementsByTagName("body")[0]
const div2 = document.getElementsByTagName("div")[1]
const span2 = document.getElementsByTagName("span")[1]
const button2 = document.getElementsByTagName("button")[1]

// body.addEventListener('click', () => {
//   console.log("body was clicked")
// })

div2.addEventListener('click', () => {
  console.log("div2 was clicked")
})

span2.addEventListener('click', () => {
  console.log("span2 was clicked")
})


button2.addEventListener('click', (e) => {
e.stopPropagation(); // only button was clicked
  console.log("button2 was clicked")
})