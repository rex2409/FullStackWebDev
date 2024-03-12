function download(url){
    console.log("Downloading File")

    return new Promise((resolve,reject)=>{
       let downloadedFile = url.split('/').pop();
       console.log(downloadedFile);
       setTimeout(()=>{
        console.log("Downloading Ends");
       },2000);
    })
}

function compress(downloadedFile){}

function upload(compressedFile){}

download('/Hello.txt')
    .then(
        (downloadedFile)=>{
            console.log(downloadedFile);
        })
    .catch((err)=>{
            console.log(err);
        }
    )


// download('/Hello.txt')
//     .then(
//         (downloadedFile)=>{
//             console.log(downloadedFile);
//         },
//         (err)=>{
//             console.log(err);
//         }
//     )