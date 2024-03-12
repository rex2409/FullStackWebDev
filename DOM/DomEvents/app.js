const btn = document.getElementById('btn');
const h1 = document.querySelector('h1');
const inp = document.querySelector('#inp');

// btn.onclick = function(){
//     console.log('Someone Clicked the button');
// }

// h1.onclick = function(){
//     h1.style.color = 'red';
//     h1.style.backgroundColor = 'aqua';
//     h1.style.border = '3px solid black';
// }

function scream(){
    console.log('SCREAM!!!!');
}

function shout(){
    console.log('SHOUTTT!!');
}

// btn.onclick = shout;

// btn.addEventListener('click',scream);//(type of event, action on event[a callback function])
// btn.addEventListener('click',shout);


//------------------------mouse event-----------------------------
h1.addEventListener('mouseenter',function(){
    console.log("Mouse Enter");
    h1.style.border = '3px solid black';
    h1.style.background = 'aqua';
});

h1.addEventListener('mouseleave',function(){
    console.log("Mouse leave");
    h1.style.border = '';
    h1.style.background = '';
});

inp.addEventListener('keypress',function(event){
    console.log('Keypressed');
    console.log(event.target);
    console.log(event.target.value);
});

inp.addEventListener('keypress',function(e){
    if(e.keyCode === 13)
        console.log("You pressed the enter key");
});

//------------------form events-------------------------------
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('Form Submitted');
    // console.dir(form);
    const username = form.elements[1].value;
    const age = form.elements[2].value;

    console.log(username,age);

});