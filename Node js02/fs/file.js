const fs=require('fs')

fs.writeFileSync("./text.txt","this is sychronous one")

fs.writeFile("./test.txt","this is Asynchronous one",(err)=>{})

console.log(fs.readFileSync("text.txt",'utf-8'))    //in this it return the result

fs.readFile("test.txt",'utf-8',(err,res)=>{  //but in asycnronous one result will be in callback
  console.log(res)
})