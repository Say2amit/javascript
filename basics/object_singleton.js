// const tinderUser = new object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "someuser@gmail.com",
    fullname: {
        userfullname :{
            firstname : "Amit",
            lastname : "kumar",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "A",
    2: "B",
    3: "c",
}

const obj2 = {4: "d", 5: "e"}

const obj3 = {6: "f", 7: "g"}
// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({},obj1, obj2, obj3)
//most used method

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
    id : 1,
    email: "h@gmail.com",
    },
    {
        id : 2,
        email: "abv@gmail.com",
    },
    {
        id : 3,
        email: "gonb@gmail.com",
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));


//destructure of object
const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh",
}

// console.log(course.courseInstructor)

// const {courseInstructor} = course
const {courseInstructor : instructor} = course
console.log(instructor)