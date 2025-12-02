print()

console.log(name)
// ReferenceError: name is not defined bcz decalared inside local scope

function print() {
  var name = "Dillion"
}