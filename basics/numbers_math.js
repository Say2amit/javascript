// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//will give two digit afte fraction

// const otherNumber = 128.4758
// console.log(otherNumber.toPrecision(3));

// const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));

/*******************************Math************************* */

// console.log(Math);
// console.log(Math.abs(-4));

// console.log(Math.round(4.9));
// console.log(Math.round(4.19));

// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));

// console.log(Math.max(4, 5, 6, 1, 3,7, 9));
// console.log(Math.min(4, 5, 6, 1, 3,7, 9));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor((Math.random()*10000 + 1)));

const min = 10;
const max = 20;
//we need value at least 10 and b/w 20

console.log(Math.floor((Math.random()*(max-min +1))+min));