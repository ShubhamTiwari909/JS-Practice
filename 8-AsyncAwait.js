function show(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Operation successfull!!");
        }, 3000);
    })
}

async function showCall(){
    console.log("Calling...");
    const result = await show();
    console.log(result);
}



function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow")
        console.log("slow promise is done")
      }, 2000)
    })
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("fast")
        console.log("fast promise is done")
      }, 1000)
    })
  }
  
  async function sequentialStart() {
    console.log('==SEQUENTIAL START==')
  
    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds()
    console.log(slow) // 2. this runs 2 seconds after 1.
  
    const fast = await resolveAfter1Second()
    console.log(fast) // 3. this runs 3 seconds after 1.
  }
  
  async function parallel() {
    console.log('==PARALLEL with await Promise.all==')
  
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async()=>console.log(await resolveAfter2Seconds()))(),
        (async()=>console.log(await resolveAfter1Second()))()
    ])
  }

  parallel()



function timeoutPromise(interval){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Set timeout function!!");
            console.log("done")
        }, interval);
    })
}


async function timeOut(){
    const timeInterval1 = timeoutPromise(3000);
    const timeInterval2 = timeoutPromise(5000);
    const timeInterval3 = timeoutPromise(7000);

    const result = Promise.all([timeInterval1,timeInterval2,timeInterval3]);
    return result;
    // await timeInterval1;
    // await timeInterval2;
    // await timeInterval3;
}

let start = Date.now();

timeOut().then(() => {
    let end = Date.now();
    let timeTaken = end - start;
    console.log(timeTaken);
}).catch((err) => {
    console.log(err);
});




//class based function
class SuperHero{
    constructor(name,age,powers){
        this.name = name;
        this.age = age;
        this.powers = powers;
    }

    async display(){
        return await setTimeout(() => {
            Promise.resolve("done");
            console.log(`Name: ${this.name} , Age: ${this.age} , Power: ${this.powers} `)
        }, 9000);
    }
}

const superhero = new SuperHero("Superman",1000,"Flying and Heat vision");

superhero.display().then(console.log);