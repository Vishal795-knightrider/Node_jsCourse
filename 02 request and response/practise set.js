// Create a page that shows a navigation bar of myntra with the following links
// Home
// Men
// Women
// Kids
// Cart
// Clicking on each link page should navigate to that page and 
// a welcome to section text is shown there.

const http=require('http');

const server=http.createServer((req,res)=>{
if(req.url === '/'){
  res.write('<html/>') 
}
});

server.listen(3000,()=>{
  console.log("sucess");
});

