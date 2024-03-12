const {writeFile} = require('fs/promises');

// let data = "I am writing data promises API"
// let write = writeFile(
//     "World.txt",
//     data,
//     {
//         encoding : 'utf-8',
//         flag: 'w'
//     }
// )

// write.then(()=>{
//     console.log("File Written Successfully");
// })
// .catch((err)=>{
//     console.log("Error:",err.message);
// })

// console.log("Running statement here below");

let data = "I am writing data using Async Await API"

async function writeData(data){
    await writeFile(
        "World.txt",
        data,
        {
            encoding : 'utf-8',
            flag: 'w'
        }
    )
    console.log("I am inevitable~Thanos");
}

writeData(data);