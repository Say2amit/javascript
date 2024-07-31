/*
data types: Primitive and Non-Primitive

Primitive DataType: Number, String, Boolean, null, Undefind, Symbol, bigInt
*/
const score = 100
const scoreValue = 100.3

const isLoggedId = false
const outsideTemp = null
let userEmail;

//symbol
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 2345434567987n


//Reference(Non-Primitivr) data type : Array, Objects, Functions
// return type will be object type
const heros = ["Spyderman", "Ironman", "Caption-America"]

let myObj = {
    name : "Amit",
    age : 22,
}

//function

const myFunc = function(){
    console.log("Hello World");
}