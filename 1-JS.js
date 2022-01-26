
//JS Set
const newSet = new Set();
for(let i=0;i<10;i++){
newSet.add(i);
}
console.log(newSet);
console.log(typeof(newSet));
// console.log(newSet.values());


//JS Map
const newMap = new Map([
    ["Superman",10000],
    ["Batman",400],
    ["Flash",800]
]);

newMap.set("Wonder Woman",3000);
newMap.set("Aqua man",1900);
console.log(newMap);
newMap.forEach((key,value) => {
    console.log("Key: " + key + " Value: " + value);
});

//Bitwise Operators 
console.log(10&19);
console.log(10|19);
console.log(10<<3);
console.log(10>>3);

//Try catch throw finally
const num = 10;
try{
num = 19; 
if(num < 20) throw "value cannot be less than 20";
}
catch(err){
    console.log(err.name);
}

finally{
console.log("finally block executed")
}



//this keyword
const superhero = {
    firstname:"Clark",
    lastname:"Kent",
    superpower:"Super Strength, laser beam and flying",
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
}

console.log(superhero.fullname());


//arrow function 
const areaOfTriangle = (base,height) => {
    return (("The area of the triangle with base "+base+" and height "+height+" is: "+1/2*base*height));
}

console.log(areaOfTriangle(29.8,11.3));