const name="ruddro"
const repoCount=100

//console.log(name+repoCount+"Value") //ruddro100Value

//console.log(`my name is ${name} and my git hub repo is ${repoCount}`); //ruddro100

const gameName = new String("pubg");

// console.log(gameName); // Output: [String: 'pubg']
// console.log(gameName[0])
// console.log(gameName[2])

// console.log(gameName.__proto__); // Output: [String: '']

// console.log(gameName.length); // Output: object
// console.log(gameName.toUpperCase()); // Output: 4

// console.log(gameName.charAt(2)); // Output: p

// console.log(gameName.indexOf('g')); // Output: 3

// console.log(gameName.concat(" is a good game")); // Output: pubg is a good game
// const newString = gameName.substring(1, 3);
// console.log(newString); // Output: ub

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString); // Output: ub


//trim string
// const myString = "      ruddro       ";
// console.log(myString.trim()); // Output: ruddro


// //replace string
// const url = "ruddro@gmail.com";
// console.log(url)
// console.log(url.replace("gmail", "yahooo")) // Output:
// console.log(url.includes("ruddro")) // Output: true
// console.log(url.includes("ruddroo")) // Output: false

const myString = "I was working on my sideProject meanwhile when i just saw ur video";
console.log(myString.split(" ")); // Output: [ 'I', 'was', 'working', 'on', 'my', 'sideProject', 'meanwhile', 'when', 'i', 'just', 'saw', 'ur', 'video' ]
