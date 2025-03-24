//array part 2

const marvelHeros = ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];
const dcHeros = ["Batman", "Superman", "Wonder", "Flash", "Green Lantern", "Aquaman"];

//marvelHeros.push(dcHeros)

//console.log(marvelHeros); // ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", ["Batman", "Superman", "Wonder", "Flash", "Green Lantern", "Aquaman"]]

//concat: merge two arrays , return a new array
const allHeros = marvelHeros.concat(dcHeros);
//console.log(allHeros); // ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Batman", "Superman", "Wonder", "Flash", "Green Lantern", "Aquaman"]

//spread operator
const allHeros2 = [...marvelHeros, ...dcHeros];
//console.log(allHeros2); // ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Batman", "Superman", "Wonder", "Flash", "Green Lantern", "Aquaman"]

const anotherArray = [1,2,3, [4,5,6], 7,[6,7,[8,9,10]]];
//console.log(anotherArray); 

//array flat
const flatArray = anotherArray.flat();
// console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 6, 7, [8, 9, 10]]
// console.log("--------------------------------------------------");
// console.log(anotherArray.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9, 10]
//console.log(anotherArray.flat(Infinity));



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));//interesting


//More reading about Array.from Array.isArray Array.of




