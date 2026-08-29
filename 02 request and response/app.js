const http=require('http');

const server=http.createServer((req,res)=>{ 
  console.log(req.method,req.url,req.headers); 
});

server.listen(3000,()=>{ 
  console.log("server sucessfully started");
});   