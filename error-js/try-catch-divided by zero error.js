// Handling Division by Zero: Example =======================
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            const err = new Error("Division by zero is not allowed.");
            throw err;
        }
        const result = a/b;
        console.log(`The result is ${result}`);
    } 
    
    catch(error) {
        console.error("Got a Math Error:", error.message)
    }
    
    // catch(err) { // = same as catch(error) 
    //     console.error("Got a Math Error:", err.message)
    // }
}

divideNumbers(24, 0);
