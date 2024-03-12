function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports.add = add;
module.exports.sub = sub;

//pollutes the global space
// globalThis.add = function add(a,b){
//     return a+b;
// }