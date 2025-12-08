function setupEvent() {
  var message = "Hello, world!";
  document.getElementById("myButton").addEventListener("click", function() {
    alert(message); // Accesses the message variable via a closure
  });
}

setupEvent();