const myPromise = new Promise(function(resolve,reject){
    let x = 10;
    let y = 20;

    if(x===y){
        resolve();
    }
    else{
        reject();
    }
});

myPromise.then(
    function(){
        console.log("successfull!!")
    }
).catch(
    function(){
        console.log("unsuccessfull")
    }
)