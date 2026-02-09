// to check * all import, imported as a object =====================
    //  -  namespace export object, does NOT include the "default" export.
    // - namespace export object ONLY contains  named exports

import multiply, * as module4 from "./module-4.js" //multiply is default

// similar name function existing in one file =========================
    export function add(c, d){
        return 1000* c + d;
    }
// * all import, all variables, arrow function-variable, function declaration imported as a single object ===============================
    console.log(module4.p);
    console.log(module4.subtract2(2, 3)); // variable of arrow-function, imported as a object module4 that's why dot notation //28
    console.log(multiply(1, 5)); // function declaration // 100

    
