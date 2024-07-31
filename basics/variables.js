const accountId = 14454
let accountEmail = "amit@gmail.com"
var accPassword = "12345"
accountCity = "Delhi"
let accountState;  //by default it will give undefined

// accountId = 123  //not allowed

accountEmail = "kumar@gmail.com"

accPassword = "0987"

accountCity = "jaipur"

console.log(accountEmail)

/*
Prafer not to use var
because of issue in scope and functional scope
*/


//consol.table will give all details in tabular format
console.table([accountId, accountEmail, accPassword, accountCity, accountState])