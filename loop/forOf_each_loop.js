// for of loop

//syntax

//mainly used in array: ["", "", ""] or [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

//maps {key value pair} but value will be unique like set in c++

const map = new Map()
map.set("IN", "India") //set data to map
map.set("UK", "United Kingdom")
map.set("Fr", "France")
map.set("IN", "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

//forof not iteratable on object
const myObj = {
    game1 : "NFS",
    game2 : "spiderman"
}

// for (const [key, value] of myObj.key) {
//     console.log(key, ":-", value);
    
// }


