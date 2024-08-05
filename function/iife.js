// Imemediately Invoked Function Expression (IIFE)


//jab global scope pollute hota h tb iife fn use krte h
//and jo fn immidiately execute ho jaye
(function chai(){
    //named IFFE
    console.log(`DB CONNECTED`);
    
})(); //last me (); ye fun execution call ka kam krta h

//using arrow fn

( ()=>{
    //Un named IFFE
    console.log(`DB CONNECTED TWO`)
})();

// function chai(name){
//     console.log(`name : ${name}`)
// }

// chai("Hitesh")

//another way to write this fn using IFFE

( (name)=>{
    console.log(`name: ${name}`)
})("Hitesh");