//THIS keyword and arrow function in javascript

/*
it's point current context
In JavaScript, the this keyword refers to the object it belongs to. Its value depends on where it is used:

Global Context: In the global execution context (outside of any function), this refers to the global object (window in browsers).

Function Context: Inside a regular function, this refers to the global object (in non-strict mode) or undefined (in strict mode).

Method Context: When a function is called as a method of an object, this refers to the object the method is called on.

Constructor Context: Inside a constructor function, this refers to the newly created instance.

Arrow Functions: Arrow functions do not have their own this. Instead, this is lexically inherited from the outer function where the arrow function is defined.
*/

const user = {
    username: "ruddro",
    price : 999,

    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to website.`);
        console.log(this)
        
    }
}


// user.welcomeMessage()
// user.username = "habib"
// user.price = 4500
// user.welcomeMessage()


//console.log(this); //return empty {}

/*
when print (this) function in browser:  
If executed directly in the console or in the global scope of a script, this will refer to the global object, which is ``window`` in browsers.

Window { ... }  // The global `window` object

Global Scope: In the browser's global scope, this refers to the window object.
Strict Mode: If strict mode ('use strict') is enabled, this in the global scope will be undefined.
Inside Functions: If this is used inside a function or method, its value can vary based on how the function is called (e.g., regular function, method, arrow function, etc.).
*/

// function chai()
// {
//     username_s = "mahadi"
//     //console.log(this);
//     console.log(this.username_s); //can be undefine
    
    
// }
// chai()

// const chai = function()
// {
//     let user_name = "taufiq"
//     console.log(this.user_name);
    
// }

// const chai = () => {
//     let user_name = "taufiq"
//     console.log(this.user_name);
    
// }
// chai()

//pure arrow function ka charcha

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

//const addTwo = (num1,num2) => num1+num2
//in arrow function 
//      if use {} -> return function necessary
//      if not use {} or use () or no parenthesis use -> return function necessary

// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(5,9));



const myArray = [2,5,3,7,8]

//myArray.forEach(() => {})
//myArray.forEach()