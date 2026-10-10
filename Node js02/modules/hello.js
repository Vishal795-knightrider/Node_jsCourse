const {add,sub}=require('./math')
// const math=require('./math')


// console.log(math)     //if module.exports=add in math.js then output of this line [Function: add]
// console.log(math(2,3))    //op:5



// console.log(math.add(2,3))
// console.log(math.sub(3,4))      //these both when we use const math=require('./math')

console.log(add(2,3))
console.log(sub(5,6))      //these both are used when we are by destructring
