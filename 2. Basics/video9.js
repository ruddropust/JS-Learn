//summary of data types
// 1. Primitive data types
//      i. Number: integer, float, double, etc.
//      ii. String: char, varchar, etc.
//      iii. Boolean: true, false
//      iv. Undefined: variable declared but not assigned any value
//      v. Null: empty value
//      vi. Symbol: unique value
//      vii. BigInt: large numbers than Number type can hold

// 2. Non-primitive data types/Reference data types
//      i. Array: collection of similar or different data types
//      ii. Object: collection of key-value pairs
//      iii. Function: block of code that can be reused

//   others(not so much important,not mentioned in the video)
//   --------------------------------------------------------
//      iv. Date: date and time
//      v. RegExp: regular expression
//      vi. Set: collection of unique values
//      vii. Map: collection of key-value pairs
//      viii. WeakSet: collection of weakly held objects
//      ix. WeakMap: collection of weakly held key-value pairs
// 3. Special data types

const id = Symbol(100);
const id2 = Symbol(100);

// if(id === id2){
//     console.log('Equal');
// }
// else{
//     console.log('Not Equal');
// }   

const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

for(const fruit of fruits){
    console.log(fruit);
}

let person = {
    name: 'John Doe',
    age: 30,
    height: 5.8,
    weight: 70,
};
// console.log(person);

//functions as variables
function add(a, b){
    return a + b;    
}
console.log(add(5, 10));
console.log(typeof add);