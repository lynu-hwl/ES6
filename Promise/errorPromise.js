var p = new Promise(function(resolve,reject){
  resolve(x+2)
})
p.then(function(){
  console.log("Error")
}).catch(function(err){
  console.log(err)
})