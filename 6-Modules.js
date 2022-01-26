const os = require('os');

const { readFileSync , writeFileSync ,readFile , writeFile} = require('fs');

//os modules
// console.log(os.userInfo());
// console.log(os.uptime());
// console.log(os.type());
// console.log(os.release());
// console.log(os.totalmem());
// console.log(os.freemem());

//file sync modules

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
const third = readFileSync('./content/result.txt','utf8');


writeFileSync('./content/result.txt',`Here is the result : ${first} , ${second}`,{flag:"a"});
// console.log(third)

//file async modules
const fourth = readFile('./content/first.txt','utf-8',
(err,result) => {
    if(err){
        console.log(err);
    }
    console.log(result)
}
)
console.log(fourth);


writeFile('./content/result.txt',`here is the result ${45}`,(err,result) => {
    if(err){
        console.log(err);
    }
})