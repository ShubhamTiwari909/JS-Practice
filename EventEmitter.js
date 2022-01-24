const EventEmitter = require("events");

const customEmitter = new EventEmitter()

customEmitter.on('response' , () => {
    console.log(`Data responded`)
})
customEmitter.on('sum' , () => {
    let a = 10;
    let b = 29;
    console.log(a + b);
})
customEmitter.on('parameters' , (name , id) => {
    console.log(`Name : ${name} , ID : ${id}`)
})

customEmitter.emit('response')
customEmitter.emit('sum')
customEmitter.emit('parameters',"Shubham",19120033)
