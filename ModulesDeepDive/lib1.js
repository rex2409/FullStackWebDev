let lib2 = require('./lib2');

let a = 10;

function add(a,b){
    return a+b;
}

module.exports = {
    add,
    a,
    lib2
}