const http=require('http');  //"Node.js, give me the HTTP module so that I can use its functions."

const server=http.createServer((req,res)=>{  //yeh request ayegi server ke pass
  console.log(req);    //yeh create server fn 1 object reurn krta hai aur us object ko humne sunna  hai
})

//yeh uper server bna to liya hai pr ab yeh request sunnni bhi to padegi serve

server.listen(3000,()=>{     //server req ko sun raha  hai
  console.log("server sucessfully started");
}); 