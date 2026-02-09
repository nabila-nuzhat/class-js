// combined import================================== 2 ways
    import getUser, {isAdmin} from "./combined-export.js";
    import { graduation, default as myData, } from "./combined-export-2.js";
console.log(isAdmin);
console.log(getUser());

console.log(graduation);
console.log(myData());

