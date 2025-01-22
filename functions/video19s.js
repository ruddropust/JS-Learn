// function setMyName()
// {
//     console.log("H");
//     console.log("A");
//     console.log("B");
//     console.log("I");
//     console.log("B");
//     console.log("U");
//     console.log("L");
    
// }

// A function is a block of code designed to perform a particular task. 
// It is executed when "something" invokes it (calls it).
// setMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// addTwoNumbers(15, 20); // This should print 35 to the console
// addTwoNumbers(5,"5")
// addTwoNumbers(6,null)

// function addTwoNumbers(num1, num2) {
//     return num1+num2
// }

// const result = addTwoNumbers(45,5)
// console.log("Reasult is:",result);

function loginUserMessage(username)
{
    // if(username===undefined || username==="")
    // {
    //     return `usernot not pass1`
    // }
    if(!username)
    {
        return `usernot not pass2`
    }
    return `${username} just logged in.`
}
console.log(loginUserMessage("ruddro"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());



