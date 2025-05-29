const accountId = 4578632
let accountEmail = "rohankumar@gmail.com"
var accountPassword = "1234"
accountCity ="Ahmedabad"
let accountState;


// accountId = 2 // not allowed 

accountEmail = "rohan@yahoo.com"
accountCity = "Baroda"
accountPassword = "3215"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])