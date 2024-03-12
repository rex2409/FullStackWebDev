const fs = require('fs');
const jimp = require('jimp');

//-------Asynchronous---------
// fs.readFile('test.png',{
//     encoding: 'base64'
// },(err,data)=>{
//     if(err) return console.log(err);
//     console.log(data);
// })

//-----Synchronous----------
let file = fs.readFileSync('test.png');
console.log(file);
let str = file.toString('base64');

// console.log(str);

//write to file
fs.writeFileSync('test.txt',str);

str = fs.readFileSync('test.txt',{encoding:'utf-8'});
let buffer = Buffer.from(str,'base64');
console.log(buffer);

fs.writeFileSync('image.png',buffer);

jimp.read("image.png", (err, image) => {
    if (err) throw err;
    image
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
    //   .greyscale() // set greyscale
      .write("image-small-bw.jpg"); // save
  });