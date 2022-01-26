//Arrow functions 
const arrowFunction = () => {
    console.log("Arrow function");
}
arrowFunction();

//With parameters
const Factorial = (num) =>{
    let fact = 1;
    for(let i=1;i<=num;i++){
        fact *= i;
    }
    console.log(fact);
}
Factorial(5);

//With rest parameters
const restPararmeter = (...args) => {
    console.log(args);
}

restPararmeter(1,2,3,4,5,6,7,8,9,10);

//with return statement
const returnArrow = (a,b) => {
    return a/b;
}
console.log(returnArrow(10,2));
