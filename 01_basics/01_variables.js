const accountId = 14453
let accountEmail = "sehaj@google.com"
var accountPassword = "12345" 
accountCity = "Dehradun"
let accountState

// accountId = 3  // not allowed
accountEmail = "vohra@gmail.com"
console.log(accountId);
console.log(accountEmail);

/* 
Prefer not to use var because
of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountState])