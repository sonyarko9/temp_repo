const http = require('http');

const server = http.createServer((req, res)=>{
//req - represents incoming request
//res - represents outgoing response

  if(req.url === '/'){
    res.end('welcome to our homepage')
  }
  if(req.url === '/about'){
    res.end('Here is our short history')
  }
  res.end(`
    <h1>Oops!</h1>
    <p>Wecan't find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)//port server listens to