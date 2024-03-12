//alert("Hello from script.js")
//primitives are datatypes tht cannot be broken into simpler datatypes
//string, number(pos,neg,0,dec,float,special), bigint, boolean, undefines, symbol, null
//to declare a variable we can use let,const or old way var.

// var a = 200;//global scope(functional level)
// {
//     var a = 300;
//     console.log(a);
// }
// console.log(a);

// let a = 200;//script scope(block level)
// {
//     let a = 300;
//     console.log(a);
// }
// console.log(a);

let x = 10;
let y = 20;
if(true){
    console.log(x);
    console.log(y);
}

//String template literals

//example 1
// Input: `I counted ${3+4} sheep`
//Output: 'I counted 7 sheep'

//example 2
let product = "Mango";
let qty = 2;
let price = 30;

console.log(`you bought ${qty}Kg of ${product}. Your total is ${qty*price}Rp`)
//`` multiline strings can be written



//String methods
let msg = "Hello how are you!"
console.log(msg.toUpperCase())
console.log(msg.toLowerCase())

let str = '      hello     '
console.log(str)
console.log(str.trim())
console.log(str.trim().toUpperCase())//method chaining

console.log(msg.substring(4))
console.log(msg.substring(2,9))//2 till 8

console.log(msg.indexOf('are'))

let str1 = "Hello"
console.log(str1.replace('l','x'))//replaces first occurence
console.log(str1.replaceAll('l','x'))
console.log(str1.repeat(3))

console.log(Math.random())

console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*6+20))//20 to 25
console.log(Math.floor(Math.random()*5+83))//83 to 87

