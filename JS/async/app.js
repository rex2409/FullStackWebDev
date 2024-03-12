function fun(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
    
}


console.log("START");

// setTimeout(callback function, time in millliseconds);
setTimeout(fun,5000);

// const id = setInterval(fun,4000);

console.log("END");