
// falsy values

// false, 0, "", -0, BigInt 0n, null, undefined, NaN

// truthy value

// "0", 'false', " ", [], {}, function(){}, 

const userEmail = []

if(userEmail){
    console.log("Got the user Email");
}else{
    console.log("Don;t have user email");
    
}


//checking empty array
// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

//checking empty object

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
// console.log(val1);

//  Terniary Operator

// condition ? true : false

const icePrice = 100

icePrice <= 80 ? console.log("less then 80") : console.log("greater then 80");

