//Callback API

//const fs = require('fs');
//fs.writeFile()

const {writeFile} = require('fs')//destructuring, can be used instead of above 2
//let data = "We are learning file systems!";
let data = "Some other data here"
writeFile(
    'hello.txt',
    data,
    {
        encoding: 'utf8',
        flag: 'a'
    },
    (err)=>{
        if(err) return console.log("Error: ",err);

        console.log("File written successfully");
    }
)