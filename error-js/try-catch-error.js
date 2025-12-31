// SYNTAX of try catch
// try {
//     // logic or code
// } catch (err) {
//     // handle error
// }
// Main Example ===================================
try {
    console.log("execution starts here");
    abc;
    console.log("execution ends here");
} catch (err) { // "err" = any variable name as parameter can be written
    console.error("An Error has occured", err);
}

// error-message Example ===============================
try{
    xnzjxmz;
}

catch(err){
    console.error("ERROR X:", err.message); // highlights the error-message in Red Color
    console.log("ERROR X:", err.message);
}