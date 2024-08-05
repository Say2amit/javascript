// for each loop
// ye ek function leta h jisme hm fn ka nam nhi dete h
//or by arrow fn k sath use krte h

const coding = ["cpp", "py", 'java', 'rb', 'js']

// coding.forEach( function(val){
//     console.log(val);
    
// })

// coding.forEach( (item)=>{
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr)=>{ //arrow fn apne sath item, index, arr leta h 
//     console.log(item, index, arr);
    
// })

const myCoding = [{
    languageName : "Javascript",
    languageFileName : "js",
    },
    {
        languageName : "Python",
        languageFileName : "py",
    },
    {
        languageName : "C++",
        languageFileName : "cpp",
    },
    {
        languageName : "java",
        languageFileName : "java",
    }
]

myCoding.forEach( (item)=>{
    // console.log(item.languageName, item.languageFileName);
    
})

//more about filter**********************

// const letscoding = ["js", 'php', 'cpp', 'py', 'java']

// const value = letscoding.forEach((item)=>{
//     console.log(item);
//     return value; //but value not returned 
    
// })


const myNums = [1, 2, 3, 4, 5, 6, 7]

// const newnums = myNums.filter( (num)=> {
//     return num > 4  //agr scope {} dete h to return keyword use krna jarurui h
// })
// console.log(newnums);

// const newNums = []

// myNums.forEach( (num)=> {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const Books = [{title: 'Book One', gener: 'Fiction', publish: 1981, 
    edition: 2004},
    {title: 'Book One', gener: 'Fiction', publish: 1994, 
        edition: 2008},
    {title: 'Book Two', gener: 'Non-Fiction', publish: 2002, 
        edition: 2013},
    {title: 'Book Three', gener: 'History', publish: 1989, 
        edition: 2007},
    {title: 'Book Four', gener: 'Science', publish: 2007, 
        edition: 2014},
    {title: 'Book Five', gener: 'Horror', publish: 1980, 
        edition: 2000},
    {title: 'Book Six', gener: 'History', publish: 1988, 
        edition: 2010},
    {title: 'Book Seven', gener: 'History', publish: 2000, 
        edition: 2010},
];

// const userBooks = Books.filter( (bk)=> bk.gener === "History")

// const userBooks = Books.filter( (bk)=> bk.publish > 2000)
// console.log(userBooks);

const userBooks = Books.filter( (bk)=> {
    return bk.publish >= 2000 && bk.gener === "History"
})

console.log(userBooks);

