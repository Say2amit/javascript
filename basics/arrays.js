//Array
// Element of array can be any type(mixture of number string boolean)
const myArr = [0, 1, 2, 3, 4, 5, 6] //size is re-sizable
const myHeros = ["marval", "DC"]

// Array Methods

myArr.push(9)// inserting element into the Array
myArr.push(8)
myArr.pop() //deleting last element from the Array

myArr.unshift(8) //adding element start of the array
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9))

const newArr = myArr.join() //Adds all the elements of an array into a string, 
                            //separated by the specified separator string


console.log(myArr)
console.log(newArr);


//slice , splice(manipulate original array)

console.log(myArr.slice(0,3));

console.log(myArr.splice(0,3));//from original array 0,1,2 were removed
console.log(myArr);