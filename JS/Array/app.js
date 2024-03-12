// let nums = [1,48,39,36];
// console.log(nums);
// console.log(nums.length);
// console.log(nums[0]);

// const fruits = ["Apple", "Orange", "Grapes"];
// console.log(fruits);

// const randomArray = [1,2,3.14,NaN,"Sid",["Apple","Orange"],undefined,null];//heterogenous
// console.log(randomArray);

// const color = ['red', 'green', 'orange'];
// console.log(color);
// const colorcopy = color;
// console.log(colorcopy);
// colorcopy.push(1,2,3);
// console.log(color);//reference type

// console.log(randomArray.pop());
// console.log(fruits.unshift("Guava","Berries"));
// console.log(fruits);
// console.log(fruits.shift());

// console.log(color.slice(1,3));//3rd index not included
// console.log(fruits.splice(1,2,'red','black','white','blue'));

// const arr = [1,2,3];
// console.log(arr.join('->'));

// const arr1 = [5,6,7];
// console.log(arr1.concat(arr));

// console.log(arr.includes(3));

// console.log(arr.indexOf(2));

// console.log(arr.reverse());

// const xo = [['X','O','X'], ['O','X','O']];
// console.log(xo);
// console.log(xo[0]);
// console.log(xo[0][1]);


//-----------------------filter------------------------

const isOdd = (num) => {
    if(num%2!==0){
        return true;
    }
    return false;
}

const arr = [1,2,3,4,5,6,7,8,9,10,11];

ans = arr.filter(isOdd);
console.log(ans);


//----------------------map----------------------------

const nums = [1,2,3,4,5,6,7];

const square = (num) => {
    return num*num;
}

const squareNums = nums.map(square);

console.log(squareNums);

//---------------------reduce--------------------------

const arr1 = [1,2,3,4,5];

const sum = arr1.reduce((prev,curr)=>prev + curr,5);//we can give initial value of 5

console.log(sum);

//---------------------sort-----------------------------

const arr2 = [1,2,10,11,12,8,9];

arr2.sort();//sorted as a string

console.log(arr2);

arr2.sort((a,b)=>a-b);//callback function to sort in numeric ascending

console.log(arr2);
