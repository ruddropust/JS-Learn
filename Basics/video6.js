/*
CHAI AUR CODE
1=>TRUE;   0=>FALSE
""=>FALSE; " "=>TRUE; "VALUE"=true
null=>FALSE; 0=>FALSE;  undefined=>FALSE ; NaN=>FALSE; Infinity=>TRUE; -Infinity=>TRUE ;

CONVERTING STRING TO NUMBER
"33" =>33
"33abc" =>NaN
null=>0; true=>1; false=>0;

*/

let score = "36"
let valueOnNumber = Number(score)
console.log(valueOnNumber,typeof valueOnNumber) // number

let scor = "36abc"
let valueOnNumbe = Number(scor)
console.log(valueOnNumbe,typeof valueOnNumbe) // number

let sco = null
let valueOnNumb = Number(sco)
console.log(valueOnNumb,typeof valueOnNumb) // number

let sc = true
let valueOnNum = Number(sc)
console.log(valueOnNum,typeof valueOnNum) // number

//Another way 
let isLoggedIn = true
let boolleanIsLoggedIn = Boolean(isLoggedIn)

console.log(boolleanIsLoggedIn,typeof boolleanIsLoggedIn) // boolean


let LoggedIn = " "
let boolleanLoggedIn = Boolean(LoggedIn)

console.log(boolleanLoggedIn,typeof boolleanLoggedIn)
console.log("---------------------------------------------------");


let score1 = 36
let valueOnString = String(score1)
console.log(valueOnString,typeof valueOnString) // string