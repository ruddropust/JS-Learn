//situation where numbr of paramiter not define
// function CalculatePrice(...num1) //res operator
// {
//     return num1
// }
// console.log(CalculatePrice(200,2001,300));

function CalculatePrice(val1,val2,...num1) //res operator
{
    return val1,val2,num1
}
console.log(CalculatePrice(200,2001,300,100,200));


// const user = {
//     username : "Habib",
//     cartPrice: 2500,
// }
// function handleObject(anyobject)
// {
//     console.log(`Username is ${anyobject.username} and
//         cart price is ${anyobject.cartPrice}`);
    
// }

// handleObject(user)
// handleObject({
//     username: "ruddro",
//     cartPrice: 1600
// })

// const myNewArray=[200,400,100,600]

// function returnSecondValue(getArray)
// {
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray));
