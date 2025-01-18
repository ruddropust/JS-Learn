//array
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myHeros = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Captain America'];

const myArray2 = new Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
// console.log(myArray[3]); // 4
// console.log(myHeros[2]); // Thor
// console.log(myArray2[6]); // 70
//console.log("------------------------------------");

//array methods

//array length
//console.log(myArray.length); // 10
//array push
myArray.push(11);
//console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//array pop
myArray.pop();
//console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myArray.pop();
//console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//add value at the beginning of the array
myArray.unshift(99)
//console.log(myArray); // [99, 1, 2, 3, 4, 5, 6, 7, 8, 9]

myArray.unshift(100)
myArray.push(5)
//console.log(myArray); // [100, 99, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//delete value at the beginning of the array
myArray.shift()
//console.log(myArray); // [99, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//includes, indexOf, lastIndexOf
// console.log(myArray.includes(5)); // true
// console.log(myArray.includes(15)); // false
// console.log(myArray.indexOf(5)); // 5
// console.log(myArray.indexOf(15)); // -1
// console.log(myArray.lastIndexOf(5)); // 5

// console.log(`type of myArray is ${typeof myArray}`); // object
// const newArray = myArray.join();
// console.log(`my array: ${myArray}`); // 99,1,2,3,4,5,6,7,8,9
// console.log(`new array: ${newArray}`); // 99,1,2,3,4,5,6,7,8,9
// console.log(`type of new array is ${typeof newArray}`); // string


const myn1 = myArray.slice(2, 5);
console.log(myn1); // [2, 3, 4]
console.log("B ", myArray); // [99, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//slice
const myn2 = myArray.slice(2,6);
console.log(myn2); // 

//splice
const myn3 = myArray.splice(2, 6);
console.log(myn3); // [2, 3, 4, 5, 6]
console.log("C ", myArray); // [99, 1, 7, 8, 9]

//in slice, original array is not modified
//in splice, original array is modified
