// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
//console.log(blockVar);
//console.log(blockLet);
function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    
        // Declaring variables
        var blockVar = "I am a block var";
        let blockLet = "I am a block let";
        const blockConst = "I am a block const";
    
        // Reassigning inside the block
        blockVar = "Reassigned block var";
        blockLet = "Reassigned block let";
        // blockConst = "New Const"; // UNCOMMENT THIS TO SEE ERROR: Assignment to constant variable.
    
        console.log(blockVar); // Works
        console.log(blockLet); // Works
    
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError
    
    // Reassigning outside the block
blockVar = "Changed again outside"; // Works! (var is not block-scoped)
console.log(blockVar);

// blockLet = "Changed outside"; // ERROR: blockLet is not defined
// blockConst = "Changed outside"; // ERROR: blockConst is not defined