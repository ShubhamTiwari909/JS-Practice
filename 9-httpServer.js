const http = require('http');


const server = http.createServer((req,res) => {
    if(req.url === '/'){
    res.end("Welcome to home page")
  
    }
    if(req.url === '/about'){
        res.end("This is About Page")
    }
   
        res.end(`<h1>OOPS Something went wrong!!!</h1><br><br><a href="/">Back to Home</a>`)

})

server.listen(5000);