// this keyword : refers current context

const user = {
    username : "Hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        //this used within the user block
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam" //yaha pr current context ko change kr diya
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     const username = "Amit"
//     console.log(this.username)
//     // yaha hme pta chala this object pe kam kr rha h, function k andar kam nhi kr rha h
// }

// chai()

// ++++++++++++++Arrow function++++++++++++++++++
// const chai = function(){
//     const username = "Amit"
//     console.log(this.username)
//     // yaha hme pta chala this object pe kam kr rha h, function k andar kam nhi kr rha h
// }

// chai()

const chai = ()=> {
    const username = "Amit"
    console.log(this)
    // yaha hme pta chala this object pe kam kr rha h, function k andar kam nhi kr rha h
}

// chai()

// syntax of arrow fn
    // ()=>{}

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }

//implicit return
// const addTwo = (num1, num2)=> num1 + num2

// const addTwo = (num1, num2)=> (num1 + num2)
//agar aap {} use kr rhe h to return keyword use krna prga

//jb object return krna ho to
const addTwo = (num1, num2)=> ({username : "hitesh"})
//object ko return krne k liye () rap krna hi hota h

console.log(addTwo(4,3))


