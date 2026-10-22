const accountId = 144553
let accountEmail = "nipun@google.com"
var accountPassword = "12345"
accountCity = "Bengaluru"   //possible to do this. But not advisable.

console.table([accountId, accountEmail, accountPassword, accountCity])

accountEmail = "nipun@coalindia.in"
accountPassword = "831005"
accountCity = "Singrauli"
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use 'var' -- because of issues with block scope and functional scope.
*/