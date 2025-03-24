//Stack and Heap memory in javascript
//stack(use primitive) memory is used for static memory allocation and heap memory is used for dynamic memory allocation.
//heap(used non primitive) memory is used for storing objects and stack memory is used for storing primitive data types.
//stack memory is faster than heap memory.
//stack memory is used for storing function calls and local variables.
//heap returns the reference of the object.
//stack returns the value of the object.

let myYoutubeName = "chai aur code";
let anotherName = myYoutubeName;

anotherName = "ruddro youtube channel";

console.log(myYoutubeName);
console.log(anotherName);

let user = {
    name: "ruddro",
    age: 25,
    upi_id: "ruddro@okhdfcbank",
    email: "demo@GMAIL.COM"
};

let anotherUser = user; // anotherUser references the same object as user
anotherUser.name = "sudipta"; 
anotherUser.age = 26;
anotherUser.upi_id = "sudipta@okhdfcbank";
anotherUser.email = "change@gmail.com";

console.log(anotherUser.name); // Output: sudipta
console.log(user); 
// Output: { name: "sudipta", age: 26, upi_id: "sudipta@okhdfcbank", email: "change@gmail.com" }

