// loop on object


//for object we use forin loop

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple',
}

for(const key in myObject){
    //console.log(key);//for key

    //console.log(myObject[key]);//for value

    console.log(`${key} for value ${myObject[key]}`);
       
}

const programming = ["cpp", "js", "ruby", "python", 'java']

for (const key in programming) {
    // console.log(key); //key will print index of array
    console.log(programming[key]);
    
    
}