var p = new Promise(function(resolve,reject){
  resolve(x+2)
})
// p.then(function(data){
//   console.log(data)
// }).catch(function(error){
//   console.log("出错了")
//   console.log(error)
// })

process.on("unhandledRejection",function(err,p){
  console.error(err.stack)
})