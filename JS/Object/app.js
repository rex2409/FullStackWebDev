//key value pair
//keys are strings

const person = {
    name: 'Devansh',
    age: 23,
    isAdult: true,
    favColor: ['Blue']
}
console.log(person.age);
console.log(person["name"]);

//-----------------prototypes---------------
//using person object
const p1 = Object.create(person);
const p2 = Object.create(p1);//__proto__ is a reference to parent of p2

console.log(p2.__proto__ === p1);
console.log(person.__proto__ === Object.prototype);

//-----------------constructor functions------

const p3 = new Person('Kartik',23);
const p4 = new Person('Ajay',23);


function Person(name,age){
    this.name = name;
    this.age = age;
    // this.sayName = function(){
    //     console.log(this.name);
    // }

    Person.prototype.sayName = function(){
        console.log(this.name);
    }

}

//--------------------This Keyword--------------

//implicit binding
const obj = {
    name: 'Devansh',
    age: 23,
    sayName: function(){
        console.log(this);
    },
    favColor:{
        color: 'Blue',
        sayColor: function (){
            console.log(this);
        }
    }
};

//explicit binding
function fun(name,age){
    console.log(name);
    console.log(age);
    console.log(this);
}

const a = {
    m:'Hello',
    n:10
}

// fun('Devansh',23);
// fun.call(a,'Devansh',25);



//call and bind
const f = fun.bind(a);
f('Monu', 24);