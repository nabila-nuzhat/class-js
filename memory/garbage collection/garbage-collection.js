function example() {
  let obj = { key: "value" }; // obj is reachable
  let anotherObj = obj; // another reference to obj

  anotherObj = null; // reference count decreases
  obj = null; // reference count decreases to 0
  // obj is now unreachable and will be garbage collected
}