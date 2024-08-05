const http=require('http')

http.createServer((req,res)=>{
 
    res.write('<h1>First Project</h2>')
    res.end()

}).listen(8000);