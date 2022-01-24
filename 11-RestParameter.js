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
   
   