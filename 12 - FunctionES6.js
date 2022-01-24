// normal functions - fibonacci series
function fibonacci(num){
    let result=0,a=0,b=1;
    while(result < num){
        let temp = b + a;
        console.log(temp);
        a = b;
        b = temp;
        result = result + 1;
    }
    
}


//default parameters 
function sum(a,b=100,c=200){
    return a + b + c;//returning statement
}
console.log(sum(50))//using the other two default values
console.log(sum(50,200))//using the last default value
console.log(sum(50,200,300))//using all dynamic values



//Rest parameter function
function restParameter(a,...args){
    console.log(a + " " + args);
}
restParameter(1,2,3,4,5,6,7)


//anonymous function
let anonymous = function(a,b,c){
    return a*b*c;
}
console.log(anonymous(12,5,89));


setTimeout(function(){
    console.log("Set Timeout function as anonymous function");
}, 2000);



