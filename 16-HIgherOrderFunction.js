const radius = [5,8,10,14]
const area = (radius) => {
    return Math.PI * radius * radius;
}
const circumference = (radius) => {
    return 2 * Math.PI * radius;
}

const diameter = (radius) => {
    return 2 * radius;
}

const calculate = (radius,logic) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));  
    }
    return output;
}

console.log(calculate(radius,area))
console.log(calculate(radius,circumference))
console.log(calculate(radius,diameter))


//same output with map functions
console.log(radius.map(area))
console.log(radius.map(circumference))
console.log(radius.map(diameter))
