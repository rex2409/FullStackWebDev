let obj = {
    a: "Hello",
    b: true,
    c:1010112,
    d:[1,2,3,4,5],
    e:{
        "dance" : "salsa"
    }
}

console.log(JSON.stringify(obj));

let jsonObj = JSON.stringify(obj);

console.log(JSON.parse(jsonObj));