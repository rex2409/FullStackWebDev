console.log(!true)
console.log(!false)


let a = 10;
let b = 20;

if(a < b){
    console.log("b is greater")
}
else{
    console.log("a is greater")
}

const num = 100;
if(num%2 === 0){
    console.log("Even")
}
else{
    console.log("Odd")

}

const age = parseInt(prompt("Enter your age"));

console.log(age);
console.log(typeof age);

if(age<18){
    alert("No entry");
}
else if(age>=18 && age<25){
    alert("Entry but no drink")
}
else{
    alert("Enter and Drink")
}