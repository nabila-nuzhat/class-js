/** Object Method Example ==================
 * Object methods are actions that can be performed on objects.
 * A method is a function definition stored as a property value.
 */
const objectMethod = {
    key1 : "abc",
    key2 : 234,
    key3 : function(){
        console.log("print key 3 xyz");
    },

    "key 44": function(){
        console.log("print key 44 object function check!");
    }
}

console.log(objectMethod);

objectMethod.key3();
objectMethod["key 44"]();

