// circular reference------ 
// the reference never ends
function call(objA, objB){
    objA.ref = objB;
    objB.ref = objA;
    return {
        A: objA,
        B: objB
    };

}
let r = call({name:"A"}, {name:"B"});
console.log(r);
