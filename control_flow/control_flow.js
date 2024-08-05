// if

// const isUserLoggedIn = true
// const tempratue = 41

// if(isUserLoggedIn){
//     console.log("yes")
// }else{
//     console.log("No");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}