
//function definition
// function say(){
//     console.log("Hello from the function");
// }
// say(); //function call

// function add(x,y){

//     let res = x + y;

//     //console.log(res);
//     return res;
// }
// const res = add(4,5);
// console.log(res);

//------------------Function Deep Dive -----------------------

// var a = 100;//global scope
// function fun(){
//     console.log(a);
//     console.log("Inside Fun");
// }
// fun();

// console.log(a);//dead temporal zone
// let a = 300;
// fun();
// function fun(){
//     console.log(a);
//     console.log("fun");
// }

// console.log(b);
// var b = 200;

// square(4);//square is not a function yet

// var square = function(n){//funtion expression
//     console.log(n*n);
// }

// //square(4);


// //arrow functions
// const cube = (n)=>{// const cube = n=> n*n*n (implicit return)
//     return n*n*n;
// }
// console.log(cube(3));


//-------------Higher Order Function-------------

function fun(){
    function innerFun(){
        console.log("InnerFun")
    }
    return innerFun();
}
const f = fun();
console.log(f);


function mult(num){
    return num*2;
}
function a(b){
    const res = b(10);
    return res;
}
console.log(a(mult));