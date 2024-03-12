const {readFile} = require ('fs/promises');

// let file = readFile('World.txt',{encoding:'utf-8'}) // Promise

// file.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err);
// })

async function readData(){
    let data = await readFile('hello.txt')
    console.log(data.toString())
}

readData();