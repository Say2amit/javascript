//Adding two nos.

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3,4)
// console.log("result: ",result);

function loginUserMessage(username = "sam"){
    if(username === undefined || !username){
        console.log("Please Enter a username");
        return
    }    
    return `${username} just logged in`
}

//console.log(loginUserMessage()) // undefined

// console.log(loginUserMessage());

//... is rest or spred operator
function caculateCardPrice(...num1){ //sabhi value ko array me rap kr dega
    return num1
}


//here val1 and val2 will take first two value and rest will go in num1
function caculateCardP(val1, val2, ...num1){
    return num1
}
console.log(caculateCardP(200, 300, 400));

console.log(caculateCardPrice(200, 300, 400));


const user = {
    username : "Hitesh",
    price : "99"
}

function handleObject(anyobject){
    console.log(`user nsme is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

//passing object by function directly

handleObject({
    username : "Amit",
    price : "199",
})


const myarr = [100, 200, 300]
function getSecondElement(myarray){
    return myarr[1]
}

// console.log(getSecondElement(myarr));

console.log(getSecondElement([100,200,3500]));



