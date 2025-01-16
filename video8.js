//Comparison of datatypes in javascript 
// 1. Primitive datatypes :- Number, String, Boolean, Undefined, Null, Symbol
// 2. Non-primitive datatypes:- Object, Array, Function, Date, RegExp, Error, Math, JSON
// 3. User-defined datatypes:- Custom objects, Custom functions, Custom arrays, Custom strings, Custom numbers, Custom booleans
// 4. Derived datatypes:- Object, Array, Function, Date, RegExp, Error, Math, JSON
// 5. Complex datatypes:- Object, Array, Function, Date, RegExp, Error, Math, JSON
// 6. Simple datatypes:- Number, String, Boolean, Undefined, Null, Symbol

//console.table([2>=1,"2"<=1,2=="2"]); //true, false, true

console.table([null>0,null==0,null>=0]); //false, false, true
//conversion problem in null>=0,
console.table([undefined>0,undefined==0,undefined>=0]); //false, false, false

//different between == and ===
console.log(2=="2"); //true
console.log(2==="2"); //false
// == is used for comparison of values
// === is used for comparison of values and datatypes