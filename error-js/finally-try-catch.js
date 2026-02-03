// "finally" with try-catch ===================
// The try…catch block gives us a way to handle errors gracefully. 
// But  may always want to execute some code irrespective of whether an error occurred or not. 
// For example, closing the database connection, stopping a loader, resetting some states, and so on. 
// That’s where "finally" comes in.
// Caution with "finally": The finally block can override return values or a thrown error. This behaviour may be confusing and can lead to bugs as well.


// syntax ============================ 
// try {
//   // Code might throw an error
// } catch (error) {
//   // Handle the error
// } finally {
//   // Always runs, whether an error occured or not
// }


// Example ===================
function performTask() {
  try {
    console.log("Doing something cool...");
    throw new Error("Oops!"); // constructor- custom error
  } catch (err) {
    console.error("Caught error:", err.message);
  } finally {
    console.log("Cleanup: Task finished (success or fail).");
  }
}

performTask();


// my example try ===================

function myLoaderCheck(){
    try{
        console.log("Page Loading!!!");

        throw new Error("Taking Too much time");
    }
    catch(error){
        console.error("Caught issue:", error.message);
    } finally{
        console.log("Stopped loading! TRY after 5 minutes!");
    }
}

myLoaderCheck();
