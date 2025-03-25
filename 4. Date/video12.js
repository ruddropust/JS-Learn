// const score = 400;
// console.log(score); // 400
// const score1 = new Number(300);
// console.log(score1); // [Number: 300]

// console.log(score1.toString())
// console.log(typeof score1.toString())

// const balence = new Number(1000);
// console.log(balence); // [Number: 1000]

// console.log(typeof balence.toString().length); // number
// console.log(balence.toString().length); // 4
// console.log(balence.toFixed(2)); // 1000.00
// console.log(balence.toFixed(3)); // 1000.000

// const num = 120.880;

// console.log(num.toPrecision(5)); // 120.88
// console.log(num.toPrecision(6)); // 120.880
// //console.log(num.toPrecision(-2)); // shows error in console range 1 to 100
// console.log(num.toPrecision(2)); // 120
// console.log(num.toPrecision(3)); // 121
// console.log(num.toPrecision(4)); // 120.9

// const hundred = 1000000
// console.log(hundred.toLocaleString()); // 1,000,000
// console.log(hundred.toLocaleString('bn-BD')); // ১,০০,০০০
// console.log(hundred.toLocaleString('en-US')); // 1,000,000
// console.log(hundred.toLocaleString('en-IN')); // 1.000.000
// console.log(Number.MAX_VALUE+" \n"+Number.MIN_VALUE); // 1.7976931348623157e+308 5e-324


//+++++++++++++  MATH  +++++++++++++++++
console.log(Math); // Math object
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.LN2); // 0.6931471805599453    
console.log(Math.abs(-4)); // 2.302585092994046
console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.trunc(4.7)); // 4
console.log(Math.trunc(-4.7)); // -4
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(9)); // 3
console.log(Math.cbrt(8)); // 2
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.random()); // 0.123456789

//take integr on given range
console.log((Math.random() * 10)+1); //  1.23456789
console.log(Math.floor(Math.random() * 10)); // 1
console.log(Math.max(10,5,6,9,55,25,36,40)); // 55
console.log(Math.min(10,5,6,9,55,25,36,40)); // 5

const mx=20;
const mn=10;
console.log(Math.round(Math.floor() * (mx-mn+1))+mn); //  10 to 20