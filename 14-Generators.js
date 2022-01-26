//Generators 
function* myGen(){
    yield "This is first yield";
    yield "This is second yield";
    yield "This is third yield";
    yield "This is fourth yield";
}
//yield function suspends the function execution and send a value back to the caller

const generator = myGen();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


//With return statement, it wont take the value of any yield after return statement
function* myGen2(){
    yield "This is first yield";
    yield "This is second yield";
    yield "This is third yield";
    return "Return Statment";
    yield "This is fourth yield";
}

const generator2 = myGen2();
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);// will print undefined because it is after return statement


//with for of loop
function* alphabets(){
    yield 'A'
    yield 'B'
    yield 'C'
    yield 'D'
    yield 'E'
    yield 'F'
    yield 'G'
    yield 'H'
}

for (const iterator of alphabets()) {
    console.log(iterator)
}



