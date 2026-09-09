const express=require('express')

// This creates an Express application/server object and stores it in app.
const app=express();

app.use((req,res,next)=>{
  console.log("1 st middleware");
  next();
})

app.use((req,res,next)=>{
  console.log("2nd middleware");
  res.send("its over");
})

app.listen(3000,()=>{
  console.log("server okkk");
})