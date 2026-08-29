const http=require('http');

const server=http.createServer((req,res)=>{ 
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  
  if(req.url==='/'){
    res.write('<h1>Home it is</h1>');
    return res.end();
  }
  else if(req.url.toLowerCase()==='/product'){
    res.write('<h1>products</h1>');
    return res.end();
  }
  res.write('<h1>Done</h1>');
  return res.end();
});

server.listen(3000,()=>{ 
  console.log("server sucessfully started");
});   