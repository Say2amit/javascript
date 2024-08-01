const name = "Amit"
const repoCount = 1

//standered way to print string 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//other way to declare string
const gameName = new String('world-For-War')

console.log(gameName[0])
console.log(gameName.__proto__) //will give empty{} object


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('F'));//will give char index

const newString = gameName.substring(0,4)
console.log(newString)

const otherString = gameName.slice(-12, 6)
console.log(otherString)

const newStringOne = "    Amit    "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://hello.com/hitesh%20chaudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('hello'))
console.log(url.includes('amit'))

console.log(gameName.split('-'))