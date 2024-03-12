let lib1 = require('./lib1');

let b = 20;

function sub(a,b){
    return a-b;
}

module.exports = {
    sub,
    b,
    lib1
}