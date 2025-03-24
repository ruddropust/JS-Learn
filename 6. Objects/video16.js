//singleton
// 

//object literals
const mySum = Symbol("key1")

const JsUser = {
    name: "Habib",
    "full name": "Habibul Islam",
    age: 18,
    location: "Pabna",
    email: "habib@gmail.com",
    [mySum]: "mykey1",
    isLoggedin: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.age)
// console.log(JsUser["age"])

// console.log(JsUser.name)
// console.log(JsUser["name"])

// //console.log(JsUser.full name) //showing error
// console.log(JsUser["full name"])
// //show symbol in object
// console.log(`show it symbol or string type: ${JsUser.mySum}`);
// console.log(`show dtype: ${typeof JsUser.mySum}`);
// //correct syntaxl
// console.log(JsUser[mySum]);

// console.log(`show it symbol or string type: ${JsUser["mySum"]}`);
// console.log(`show dtype: ${typeof JsUser[mySum]}`);

// //change value
// JsUser.email = "habib@chatgpt.com"
// console.log(JsUser["email"]);

// //freez of a object
// //if i add freez keyword then object property cann't changable\
// Object.freeze(JsUser)
// JsUser.email = "ruddro@chatgpt.com"
// console.log(JsUser["email"]);

// //print
// console.log(JsUser);

JsUser.greeting = function()
{
    console.log("hello JS user");
    
}
JsUser.greetingTwo = function()
{
    console.log(`hello JS user ${JsUser["full name"]}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);

console.log(JsUser.greetingTwo());



