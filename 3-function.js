//Default function 
const length = 10;
const breadth = 20;
function areaOfRectangle(){
    return length * breadth;
}


//parameterisd function
function areaOfCone(radius,height){
    console.log(Math.PI * radius * (radius + Math.sqrt(Math.pow(height,2) + Math.pow(radius,2))));
}

//function stored in variable
const maxNumber = function(){
    let max = -Infinity;
    for(let i=0; i < arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    console.log(max);
}
maxNumber(1,6,99,8,14,109,57,208);


const minNumber = function(){
    let min = Infinity;
    for(let i=0; i < arguments.length; i++){
        if(arguments[i]<min){
            min = arguments[i];
        }
    }
    console.log(min);
}
minNumber(1,6,99,8,14,109,57,208);


//self invoking function
(function add(){
    console.log(10 + 19);
})();

//Closures - Practical example
function makeSizer(size) {
    return function() {
      document.body.style.fontSize = size + 'px';
    };
  }
  
var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

//binding them to html buttons
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;