function willYouMarryMe(fightsCount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(fightsCount>100)
                return reject("Not getting married");
            resolve("getting married happily");
        },3000)
    })
}

willYouMarryMe(5)
    .then(
        (msg)=>{
            console.log(msg);
        },
        (err)=>{
            console.log(err);
        }
    )