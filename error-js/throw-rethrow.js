// throw-rethrow error ========================

function processData() {
  try {
    parseUserData();
  } catch (err) {
    console.error("Error in processData:", err.message);
    throw err; // Rethrow so the outer function can handle it too
  }
}

function main() {
  try {
    processData();
  } catch (err) {
    console.log("ERRROORR222", err);
    
     handleErrorBetter(err); ////" handleErrorBetter(err)" has no meaningful purpose yet. because its behavior is not defined. Right now, it is just a placeholder.
  }
}

main();
// In the code above, the processData() function catches an error, logs it, and then throws it again.
// The outer main() function can now catch it and do something more to handle it better.