let score = "33" 


// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)

//Issue in java
let mark = "123abs"

let markInNumber = Number(mark)
// console.log(typeof mark)
// console.log(markInNumber)  // here we can not convert mark as number bt still
                            //javascript can do but result as a NaN(not a number)


//convrsion in Number
//"33" => 33
//"33abs" => NaN
//true => 1
//null => 0
//undefined => NaN

//conversion in boolean
//1 => true
//""=> false
//"abs" => true

//****************************** Operations *************************/

let value = 3

let negValue = -value

// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello"
let str2 = " Amit"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log("1"+ 2 + 2)
console.log(1 + 2 + "2")
console.log(1 + "2" + 2)