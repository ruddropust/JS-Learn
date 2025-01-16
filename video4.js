const account_id = 200124 //good practice, constant value never change
let email = "demo@gte.com" //good practice, email be change
var password = "123456" // not recommended
accountCity = "Dhaka" //worst practice

// account_id = 200125 /not allowed
email = "demo2@gmail.com"
password = "1234567"
accountCity = "Chittagong"

console.log(account_id, email, password, accountCity);
console.table([ account_id, email, password, accountCity ]);
//console.table([ account_id, email, password, accountCity,account_State ]);

/*
account_state not defined


*/