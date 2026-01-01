function doSomething() {
  const x = y + 1; // y is not defined
}
try {
  doSomething();
} catch (err) {
  console.log(err.name);    // ReferenceError
  console.log(err.message); // y is not defined
  console.log(err.stack); // ReferenceError: y is not defined
                          // at doSomething (<anonymous>:2:13)
                          // at <anonymous>:5:3
}