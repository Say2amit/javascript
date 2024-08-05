// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if(index == 5){
        // console.log("Five is best number")
    }
    // console.log(index);
      
}

for(let i=1; i<=10; i++){
    // console.log(`outer loop value: ${i}`);
    
    for(let j=1; j<= 10; j++){
        // console.log(`inner loop value: ${j}`);
        // console.log(i + "*" + j + " = ", i*j);
        
    }
}

let myArray = ["flash", "batman", "superman"] 

for(let i=0; i<myArray.length; i++){
    // console.log(myArray[i]);
    
}

// for(let i=0; i<=20; i++){
//     if(i == 5){
//         console.log("detected 5 now break");
//         break
//     }

//     console.log(`value of i is ${i}`);
    
// }

for(let i=0; i<=20; i++){
    if(i == 5){
        // console.log("detected 5 now break");
        continue
    }

    console.log(`value of i is ${i}`);
    
}


 
