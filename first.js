const fs=require('fs')

fs.writeFile('test.txt',"hey here this is the file",(err)=>{
  if(err) console.log("error occured");
  else console.log("file created sucesssfully");
}) 