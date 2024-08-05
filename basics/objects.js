//singleton : Object.create

//object literals

//symbol

const mySym = Symbol("")

const jsUser = {
    name : "Amit",
    "full Name" : "Amit Kumar",  //is casev me hm jsUser.full name nhi kr skte
    [mySym] : "mySymbol",
    age : 28,
    location : "Delhi",
    email: "amit@gmail.com", 
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);

//change value
jsUser.email = "kumar@gmail.com"
// console.log(jsUser)
// Object.freeze(jsUser) //you can freez any object so no one can change its member
jsUser.email = "ananda@ok.com"
// console.log(jsUser);

//giving function as an object

jsUser.greeting = function(){ //greeting become a method
    console.log("Hello JS User")
}

jsUser.greetingTwo = function(){ //greeting become a method
    console.log(`Hello JS Use, ${this.name}`)
}

console.log(jsUser.greeting());// here greeting is method
console.log(jsUser.greetingTwo());




