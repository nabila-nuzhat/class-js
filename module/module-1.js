import { add as add2 } from "./module-3.js";
export const a = 10;
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;



// default export ways =================================== 3 ways
        // export default (a, b) => a*b; //-------------- 1 way
        // export default function multiply(a, b) {return a*b;} //--- 2 way
        const  multiply = (a, b) => a*b; //-------------- 3 way
        export default multiply;

// similar name function existing in one file =========================
    console.log(add2(7, 5));
    
