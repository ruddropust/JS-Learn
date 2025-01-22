/*
In JavaScript, the var, let, and const keywords are used to declare variables, but they have different scopes and behaviors.

var: Variables declared with var are function-scoped or globally-scoped if declared outside a function. They are also hoisted, meaning they are moved to the top of their scope before code execution.

let: Variables declared with let are block-scoped, meaning they are only accessible within the block they are defined in. They are not hoisted in the same way as var.

const: Variables declared with const are also block-scoped and must be initialized at the time of declaration. They cannot be reassigned.

In your code:

a is declared with let and is block-scoped, so it is not accessible outside the if block.
b is declared with const and is also block-scoped, so it is not accessible outside the if block.
c is declared with var and is function-scoped or globally-scoped, so it is accessible outside the if block.
If you uncomment the console.log(a); and console.log(b); lines, you will get ReferenceError because a and b are not defined outside the block.

Here's the corrected code with comments:

If you need a and b to be accessible outside the block, you should declare them outside the block:

*/
// //scopes
let a =20
// const b =22
// var c = 36

if(true)
{
    let a =258
    const b =22
    var c = 36; 
    console.log(`Inner loop ${a}`);
    
}

console.log(`Outer loop ${a}`);
//console.log(b);
// console.log(c);


