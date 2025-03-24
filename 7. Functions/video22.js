/*
In JavaScript, scope and hoisting are fundamental concepts that determine how variables and functions are accessed and executed. Let's break down these concepts:

Scope
Scope refers to the context in which variables and functions are accessible. JavaScript has three types of scope:

Global Scope: Variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.
Function Scope: Variables declared within a function are in the function scope and can only be accessed within that function.
Block Scope: Variables declared with let or const within a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block.
Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

Variable Hoisting
Variables declared with var are hoisted to the top of their function or global scope. However, only the declaration is hoisted, not the initialization.
*/

// function one()
// {
//     const userName = "Habib"

//     function two()
//     {
//         const website="github"
//         console.log(userName);
        
//     }

//     //console.log(website); //website not define

//     two()
    
// }

// //one()

// if(true){
//     const userName= "Habib"
//     if(userName=="Habib")
//     {
//         const website = "github"
//         console.log(userName,"  ",website);
//     }
//     //console.log(website);//website not define
    
// }
//.log(userName); //username not define

//++++++++++++ interesting +++++++++++++++++++++//
console.log(addOne(5));
function addOne(num)
{
    return num+1
}


//console.log(addTwo(10)); //show error because call before declare
const addTwo = function(num){
    return num+2
}

console.log(addTwo(10));


