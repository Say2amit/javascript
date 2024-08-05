// reduce
//accumulator by one increase hota h 

const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, currVal)=> {
    console.log(`acc ${acc} and curral ${currVal}`);
    
    return acc + currVal
}, 3 )  //yaha 0 dene ka matlab h hm acc me initial value 0 de rhe h

console.log(myTotal)

const shoppingCard = [
    {
        itemName : "js",
        price : 2999,
    },
    {
        itemName : "Python",
        price : 999,
    },
    {
        itemName : "jC++",
        price : 1999,
    },
    {
        itemName : "Peral",
        price : 3999,
    },
    {
        itemName : "Java",
        price : 5999,
    },
]

const priceToPay = shoppingCard.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
