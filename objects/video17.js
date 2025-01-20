//const tinderUser = new Object()
const tinderUser = {}
const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userFullname:{
            firstName: "Habib",
            lastName: "Islam"
        }
    }
}
tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.isSubscribed = true;
tinderUser.email = "john.doe@example.com";

//console.log(regularUser.fullname.userFullname.firstName);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("id"));
console.log(tinderUser.hasOwnProperty("id1"));





//concatanet object
// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}
// const obj5 = {5:"e", 6:"f"}

//const obj3 = Object.assign(obj1,obj2)
//const obj4 = Object.assign({},obj1, obj2)
// const obj3 = {...obj1, ...obj2} //use spread operator

// console.log(obj3)

