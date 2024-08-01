//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

let createMyDate = new Date(2024, 0, 24)// 0 means january
console.log(createMyDate.toDateString());

let createMyDate2 = new Date(2024, 0, 24, 5,4,6)
console.log(createMyDate2.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(createMyDate.getTime());//time will be in milisecond 

//to get in second, /1000

console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getMonth()+1);