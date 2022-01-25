//Rest Parameters
function Product(...nums){
    let product = 1;
    for(let i of nums){
        product *= i;
    }
    return product;
       
}

console.log(Product(1,2,3,4,5))

//object destructuring 
const colours = ["Red","Blue","Black","Violet","Green","Magenta"]
const [a,b,...args] = colours;
console.log(a)
console.log(b)
console.log(args)


//object destructuring of functions return output
const functionDestructure = () => {
    return [100,200,300,400];
}

const [a,b,c,d] = functionDestructure();
console.log(a)
console.log(b)
console.log(c)
console.log(d)

// swapping values
let x = 10, y = 20;

[x , y] = [y , x];
console.log(x , y)
   