let colours = ["Red","Blue","Yellow"];
let allColours = [...colours , "Magenta","Purple","Pink","Orange"];
console.log(allColours);

//copying an array with spread operator will not change the original array
let alphabets = ['a','b','c','d','e']
let aplha = [...alphabets];
aplha.push('f');
console.log(aplha)
console.log(alphabets)

//copying an array directly will change the original array
let number = [1,2,3,4,5];
let newNumber = number;
newNumber.push(6,7,8,9,10);
console.log(newNumber);
console.log(number)

//with strings 
let alphabets1 = ['a',...'bcd','e']
console.log(alphabets1)//will print [ 'a', 'b', 'c', 'd', 'e' ]

