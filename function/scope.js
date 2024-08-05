const a = 10
let b = 20
var c = 30

if (true) {
    const a = 40
    let b = 50
    var c = 60
    // console.log("Inner :",c)
}
// console.log(a);
// console.log(b);
// console.log(c);// c = 30 but we age getting 60 thats not good


function one(){
    const username = "Amit"

    function two(){
        const website = "Youtube"
        console.log(username);   
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "Amit"
    if (username === "Amit") {
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


// +++++++++++++++++++interesting+++++++++++++++++++

addone()

function addone(num){
    return num + 1
}

// addone()

// addtwo(5) // in this case we cann't access before initialization
const addtwo = function(num){  // it is alseo a function but sometime called expression
    return num + 2
}

addtwo(5)
console.log(addtwo(5))