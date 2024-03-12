for( let num=1;num<=10;num++){
    if(num===5){
        //break;
        continue;
    }
    console.log(num);
}

let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

const fruits = ['apple', 'orange', 'guava', 'mango']
for(let fruit of fruits){
    console.log(fruit);
}

const car = {
    name:'BMW',
    price: 200000,
    isDiskBrake:true
}
for(let i in car){
    console.log(i);
    console.log(`${i}-->${car[i]}`);

}