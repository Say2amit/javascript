const buttons = document.querySelectorAll('.button') //. esliye bcz hm class select kr rhe h
// console.log(buttons);

const body = document.querySelector('body')

//event
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        
        
    })
})