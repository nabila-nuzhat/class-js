import{a} from "./module-1.js"
import { add, subtract } from "./module-1.js";
// default import ways =========================== 2 ways
    // aliasing, direct name, different single name without curly braclet
        import {default as multiOne} from "./module-1.js" //  alias
        // import multiply from "./module-1.js" // direct name
        // import mulExport from "./module-1.js" // different single name without curly braclet
        
console.log(a);
console.log(add(3, 2));
console.log(subtract(10, 100));
// default imported use: -------------------------- 2 ways
    console.log(multiOne(10,20)); // alias
    // cconsole.log(multiply(60,20));

    // similar name function existing in one file =================
        // example in module-3.js

