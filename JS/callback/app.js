function cb(){
    console.log("Inside cb()");
}

function fun(f){
    console.log("Inside fun");
    f();
}

fun(cb);