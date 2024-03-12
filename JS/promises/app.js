let watchingMovies = true;

function delay(){
    let currentTime = new Date().getTime();
    while(currentTime+1000>new Date().getTime()){

    }
}

let p = new Promise(function(resolve,reject){
    delay();
    if(!watchingMovies)
        return reject("No! popcorn");
    resolve("Yaay! Popcorns");
});

p.then(
    //This function will run on success// for resolve
    function(msg){
        console.log("Success: ", msg);
    },

    //THis function will run on failure// for reject
    function(errMsg){
        console.log("Failure: ",errMsg);
    }
)