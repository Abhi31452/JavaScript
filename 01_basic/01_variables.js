const accountId = 982343
let accountEmail ="abhishek09@google.com"
var accountPassword = "986745"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed


accountEmail = "av@hvj.com"
accountPassword = "2455666"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])