let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth()+1); //month lie between 0-11// 0 means january
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());

console.log(myDate.getTime());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toString());

//console.log(typeof myDate);

let myPastDate = new Date(2023,0,22,5,3);
// console.log(myPastDate);
// console.log(myPastDate.toDateString());
// console.log(myPastDate.toTimeString());
// console.log(myPastDate.toLocaleString());

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myPastDate.getTime());

let newDate = new Date();
console.log(newDate.getDate());
