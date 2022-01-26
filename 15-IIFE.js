//IIFE - immediately invoked function expressions
(function(){
    console.log("IIFE - immediately invoked function expressions")
    }());
    
    //with parameters
    (function(a,b,c){
        console.log(a + b + c)
    }(10,17,89));
    
    //with rest parameters
    (function(...args){
        console.log(args)
    }(10,11,12,13,14,15));
    
    